import * as C from './styles';

import UserCard from '../UserCard';
import SearchBox from '../SearchBox';

import useMainContext from '../../hooks/useMainContext';

type Props = {
  screenWidth: number;
  visibility: boolean;
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
};

function AllChats({ screenWidth, visibility, setVisibility }: Props) {
  const { theme } = useMainContext();

  return ( 
    <C.Container 
      userTheme={theme}
      isVisible={screenWidth < 830 ? visibility : true}
    >
      <h1 className='title'>Chats</h1>
      <SearchBox />
      <UserCard 
        setVisibility={setVisibility}
        userName='Testing'
        profileImageLink=''
        lastMessage='iiiiiiiiiiaaa'
      />
    </C.Container>
  );
}

export default AllChats;