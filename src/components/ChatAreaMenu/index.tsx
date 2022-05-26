import { useEffect, useState, useRef } from 'react';
import { BiLeftArrowAlt } from 'react-icons/bi';
import EmojiPicker from 'emoji-picker-react';
import { IEmojiData } from 'emoji-picker-react';

import * as C from './styles';

import MessageBallon from '../MessageBallon';
import WriteMsgArea from '../WriteMsgArea';
import ProfilePhoto from '../ProfilePhoto';

import useMainContext from '../../hooks/useMainContext';
import { db, sendMessage } from '../../helpers/Api';
import { ChatDataType } from '../../types/mainTypes';
import { collection,  onSnapshot } from 'firebase/firestore';

type Props = {
  screenWidth: number;
  visibility: boolean;
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
};

type HandleEmojiClickType = (
  e: React.MouseEvent<Element, MouseEvent>,
  emojiData: IEmojiData
) => void;

function ChatArea({ screenWidth, visibility, setVisibility }:Props) {

  const [emojiIsOpen, setEmojiIsOpen] = useState(false); //emoji picker visibility
  const [inputMsg, setInputMsg] = useState(''); // message input state
  const [currentChatData, setCurrentChatData] = useState<ChatDataType | any>(null);
  const { userAuth, theme, currentChat } = useMainContext();

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, `chats`, `${currentChat}`), (doc) => {
      let data: any = [];

      doc.forEach((doc) => {
        data.push(doc.data());
      });
      setCurrentChatData(data);

    }); 
     

    return () => {
      setCurrentChatData(null)
      unsub();
    }

  }, []);

  useEffect(() => {
    if(divRef.current) {
      divRef.current.scrollTop = divRef.current?.scrollHeight;
    } 
  }, [currentChatData])

  const handleEmojiClick:HandleEmojiClickType = (e, emojiData) => setInputMsg(inputMsg + emojiData.emoji); //insert emojis

  const handleSendMessage = async () => {
    if(!inputMsg) {
      return;
    }

    const message = {
      author: userAuth.email,
      body: inputMsg,
      date:+ new Date() / 1000,
    };

    currentChat && await sendMessage(currentChat, message);

    setInputMsg('')

    if(divRef.current) {
      divRef.current.scrollTop = divRef.current?.scrollHeight;
    }  

  };

  return (
    <C.Container 
      userTheme={theme}
      isVisible={screenWidth < 830 ? !visibility : true} //controlls chat Area visibility
      emojiIsVisible={emojiIsOpen} // controls emoji picker visibility
    >
      
      <div className='chatInfo'>
        <div 
          className='chatInfo__backButton'
          onClick={() => setVisibility(true)}
        >
          <BiLeftArrowAlt />
        </div>
        <ProfilePhoto 
          imageSrc={currentChatData ? currentChatData[0].chatAvatar : ''}
          size='small'
        />
        <div className='chatInfo__chatTitle'>
          {currentChatData ? currentChatData[0].title : 'Loading...'}
        </div>
      </div>
      <div 
        className='messagesContainer'
        ref={divRef}
      >
          {currentChatData && currentChatData[0].messages.length > 0 &&
            currentChatData[0].messages.map((e: any, key:any) => (
                <MessageBallon 
                  message={e.body}
                  key={key}
                  side={e.author === userAuth.email ? 'right' : 'left'}
                />
            ))
          }
      </div>
      <div className='emojiArea'>
        <EmojiPicker 
          onEmojiClick={handleEmojiClick}
          disableSearchBar
          disableSkinTonePicker
        />
      </div>
      <WriteMsgArea 
        emojiIsOpen={emojiIsOpen}
        inputMsg={inputMsg}
        setEmojiIsOpen={setEmojiIsOpen}
        setInputMsg={setInputMsg}
        handlerClick={handleSendMessage}
      />
    </C.Container>
   );
}

export default ChatArea;