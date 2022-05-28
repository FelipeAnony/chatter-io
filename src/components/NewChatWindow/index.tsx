import { SetStateAction, useEffect, useState } from 'react';
import useMainContext from '../../hooks/useMainContext';
import * as C from './styles';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import SearchBox from '../SearchBox';
import { getDataFromDb } from '../../helpers/Api';
import NewChatCard from '../NewChatCard';

type Props = {
  visibility: boolean;
  setVisibility: React.Dispatch<SetStateAction<boolean>>;
};

type UsersList = {
  data: {
    chats: {
      chatId: string;
      users: {
        user1: string; 
        user2: string
      }
    }[];
    email: string;
    name: string;
    profileImage: string;
  };
  id: string;
}[];

function NewChatWindow ({visibility, setVisibility}: Props) {
  
  const [usersList, setUsersList] = useState<UsersList>([]);
  const { theme, userAuth, userData } = useMainContext();

  useEffect(() => {
    const contatoExiste = (email: string) => {
      if(userData){
        const tmpArray = userData.chats.filter((e) => (
          e.users.user2 === email
        ))
      
        if(tmpArray.length > 0) return false;
        else return true;
      } 
    }; 

    const loadData = async () => {
      const tmpdata: UsersList = await getDataFromDb('users');

      const filteredData = tmpdata.filter((e) => e.id !== userAuth.email && contatoExiste(e.id));

      setUsersList(filteredData);
    }; 

    loadData();

  }, [userAuth.email, userData]);

  return ( 
    <C.Container 
      visibility={visibility}
      userTheme={theme}
    >
      <div className='backButtonContainer'>
        <div 
          className='backButton'
          onClick={() => setVisibility(false)}
        >
          <AiOutlineArrowLeft />
        </div>
      </div>
      <h1 className='title'>New Chat</h1>
      <div className='innerContainer'>
        <SearchBox />
        {usersList.length > 0 &&
          usersList.map((e, key)=>(
            <NewChatCard 
              key={key}
              user={e.data}
            />
          ))
        }
      </div>
    </C.Container>
   );
}

export default NewChatWindow;