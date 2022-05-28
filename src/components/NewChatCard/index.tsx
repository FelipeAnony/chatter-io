import { createNewChat } from '../../helpers/Api';
import useMainContext from '../../hooks/useMainContext';
import ProfilePhoto from '../ProfilePhoto';
import * as C from './styles';

type Props = {
  user: {
    chats: {}[];
    email: string;
    name: string;
    profileImage: string;
  };
};

function NewChatCard({ user }: Props) {
  const { theme, setCurrentChat, userData } = useMainContext();

  const handleClick = () => {
    //fechar a tela add new chat e setar a visibilidade do messageMenu 
    const newChat = async () => {
      if(userData) {
        const chatId = await createNewChat(userData, user);
        setCurrentChat(chatId)
      }
    }

    newChat();
  };

  return (
    <C.Container userTheme={theme} onClick={handleClick}>
      {user && (
        <>
          <ProfilePhoto imageSrc={user.profileImage} />
          <div className="userInfo">
            <div className="userInfo__name">{user.name}</div>
          </div>
        </>
      )}
    </C.Container>
  );
}

export default NewChatCard;
