import useMainContext from '../../hooks/useMainContext';
import ProfilePhoto from '../ProfilePhoto';
import * as C from './styles';

type Props = {
  userData: {
    chats: {}[];
    email: string;
    name: string;
    profileImage: string;
  };
};

function NewChatCard({ userData }: Props) {
  const { theme, setCurrentChat } = useMainContext();

  const handleClick = () => {
    
  };

  return (
    <C.Container userTheme={theme} onClick={handleClick}>
      {userData && (
        <>
          <ProfilePhoto imageSrc={userData.profileImage} />
          <div className="userInfo">
            <div className="userInfo__name">{userData.name}</div>
          </div>
        </>
      )}
    </C.Container>
  );
}

export default NewChatCard;
