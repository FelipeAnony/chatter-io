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
  setWindowNewChatVisibility: React.Dispatch<React.SetStateAction<boolean>>;
  setAllChatsMenuVisibility: React.Dispatch<React.SetStateAction<boolean>>;
};

function NewChatCard({ user, setAllChatsMenuVisibility, setWindowNewChatVisibility }: Props) {
  const { theme, setCurrentChat, userData, setUserData } = useMainContext();

  const handleClick = () => {
    const newChat = async () => {
      if(userData) {
        const chatObj = await createNewChat(userData, user);
        setCurrentChat(chatObj.id)
        setUserData({...userData, chats:[...userData.chats, ...chatObj.chats]})
        setWindowNewChatVisibility(false);
        setAllChatsMenuVisibility(false);
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
