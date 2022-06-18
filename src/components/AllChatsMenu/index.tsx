import * as C from './styles';

import ChatCard from '../ChatCard';
import SearchBox from '../SearchBox';

import useMainContext from '../../hooks/useMainContext';
import NewChatButton from '../NewChatButton';
import { useState } from 'react';
import NewChatWindow from '../NewChatWindow';

type Props = {
  screenWidth: number;
  visibility: boolean;
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
};

function AllChats({ screenWidth, visibility, setVisibility }: Props) {
  const { theme, userData } = useMainContext();
  const [newChatWindowVisibility, setNewChatWindowVisibility] = useState(false);

  return (
    <C.Container
      userTheme={theme}
      //if screenWidth are less than 830, then the mobile view are showed
      //in mobile view AllChatsMenu and ChatAreaMenu never both stay rendered
      //if screenWidth are more than 830, then the desktop view are showed and it always show the both mentioned components
      isVisible={screenWidth < 830 ? visibility : true}
    >
      {!newChatWindowVisibility ? (
        <>
          <h1 className="title">Chats</h1>
          <SearchBox />
          <div className="chatsContainer">
            {userData &&
              userData.chats.length > 0 &&
              userData.chats.map((e) => (
                <ChatCard
                  key={e.chatId}
                  chatId={e.chatId}
                  setVisibility={setVisibility}
                />
              ))}
          </div>
          <NewChatButton
            setNewChatWindowVisibility={setNewChatWindowVisibility}
          />
        </>
      ) : (
        <NewChatWindow
          newChatWindowVisibility={newChatWindowVisibility}
          setNewChatWindowVisibility={setNewChatWindowVisibility}
          setAllChatsMenuVisibility={setVisibility}
        />
      )}
    </C.Container>
  );
}

export default AllChats;
