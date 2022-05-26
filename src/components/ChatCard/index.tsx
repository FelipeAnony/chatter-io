import * as C from './styles';

import ProfilePhoto from '../ProfilePhoto';

import useMainContext from '../../hooks/useMainContext';
import { formatDateByTimestamp } from '../../helpers/dateFormater';
import { useEffect, useState } from 'react';
import { db } from '../../helpers/Api';
import { doc, onSnapshot } from 'firebase/firestore';

type Props = {
  chatId: string;
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
};

function ChatCard({ chatId, setVisibility }: Props) {
  const { theme, setCurrentChat } = useMainContext();
  const [chatData, setchatData] = useState<any>(null);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, `chats`, `${chatId}`), (doc) => {
     
      setchatData(doc.data());

    }); 

    return () => {
      unsub();
    }
  }, []);

  const handleClick = () => {
    setVisibility(false);
    setCurrentChat(chatId);
  };

  return ( 
    <C.Container 
      userTheme={theme}
      onClick={handleClick}
    >
      {chatData && 
        <>
          <ProfilePhoto imageSrc={chatData.chatAvatar}/>
          <div className='userInfo'>
            <div className='userInfo__name'>{chatData.title}</div>
            <div className='userInfo__lastMessage'>{chatData.lastMessage}</div>
            <div className='userInfo__date'>{formatDateByTimestamp(chatData.lastMessageDate)}</div>
          </div> 
        </>
      }
    </C.Container>
   );
}

export default ChatCard;