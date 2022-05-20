import { useState } from 'react';
import { BiLeftArrowAlt } from 'react-icons/bi';
import EmojiPicker from 'emoji-picker-react';
import { IEmojiData } from 'emoji-picker-react';

import * as C from './styles';

import MessageBallon from '../MessageBallon';
import WriteMsgArea from '../WriteMsgArea';
import ProfilePhoto from '../ProfilePhoto';

import useMainContext from '../../hooks/useMainContext';


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
  const { theme } = useMainContext();
    
  const handleEmojiClick:HandleEmojiClickType = (e, emojiData) => setInputMsg(inputMsg + emojiData.emoji); //insert emojis

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
          imageSrc=''
          size='small'  
        />
        <div className='chatInfo__chatTitle'>
          Testing...
        </div>
      </div>
      <div className='messagesContainer'>
          <MessageBallon side='left'/>
          <MessageBallon side='right'/>
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
      />
    </C.Container>
   );
}

export default ChatArea;