import * as C from './styles';

import ChatCard from '../ChatCard';
import SearchBox from '../SearchBox';

import useMainContext from '../../hooks/useMainContext';

type Props = {
  screenWidth: number;
  visibility: boolean;
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
};

function AllChats({ screenWidth, visibility, setVisibility }: Props) {
  const { theme, userData } = useMainContext();

  return ( 
    <C.Container 
      userTheme={theme}
      isVisible={screenWidth < 830 ? visibility : true}
    >
      <h1 className='title'>Chats</h1>
      <SearchBox />
      {userData && userData.chats.length > 0 && 
        userData.chats.map((e, key) => (  
          <ChatCard 
            key={key} 
            chatId={e.chatId}
            setVisibility={setVisibility}
          />
        ))
      }
    </C.Container> 
  ); 
}

export default AllChats;