import SearchBox from '../SearchBox';
import UserCard from '../UserCard';
import * as C from './styles';

type Props = {
  screenWidth: number;
  visibility: boolean;
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
};

function AllChats({ screenWidth, visibility, setVisibility }: Props) {

  return ( 
    <C.Container 
      isVisible={screenWidth < 830 ? visibility : true}
    >
      <h1 className='title'>Chats</h1>
      <SearchBox />
      <UserCard 
        setVisibility={setVisibility}
        userName='Testing'
        profileImageLink=''
        lastMessage='hiiiiiiiii iiiiiiiiciiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiisddaaaa'
      />
    </C.Container>
  );
}

export default AllChats;