import { useEffect, useState } from 'react';

import * as C from './styles';

import ChatCard from '../ChatCard';
import SearchBox from '../SearchBox';

import useMainContext from '../../hooks/useMainContext';
import { UserDataType } from '../../types/mainTypes';
import { getOrCreateDocumentOnDb } from '../../helpers/Api';

type Props = {
  screenWidth: number;
  visibility: boolean;
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
};

function AllChats({ screenWidth, visibility, setVisibility }: Props) {
  const [chatList, setChatList] = useState<UserDataType | any>(null);
  const { theme } = useMainContext();

  return ( 
    <C.Container 
      userTheme={theme}
      isVisible={screenWidth < 830 ? visibility : true}
    >
      <h1 className='title'>Chats</h1>
      <SearchBox />
      {/* {chatList.data[0].chats.length > 0 && 
        chatList.data[0].chats.map((e:any) => (
          <ChatCard 
            key={e.title}
            setVisibility={setVisibility}
            chatTitle={e.title}
            profileImageLink={e.image}
            lastMessage={e.lastMessage}
            date={e.lastMessageDate.seconds}
          />
      ))} */}
    </C.Container>
  );
}

export default AllChats;