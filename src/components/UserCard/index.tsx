import * as C from './styles';

import ProfilePhoto from '../ProfilePhoto';

import useMainContext from '../../hooks/useMainContext';

type Props = {
  userName: string;
  profileImageLink: string;
  lastMessage: string;
  setVisibility:  React.Dispatch<React.SetStateAction<boolean>>;
};

function UserCard({userName, profileImageLink, lastMessage, setVisibility}: Props) {
  const { theme } = useMainContext();

  return ( 
    <C.Container 
      userTheme={theme}
      onClick={() => setVisibility(false)}
    >
      <ProfilePhoto imageSrc={profileImageLink}/>
      <div className='userInfo'>
        <div className='userInfo__name'>{userName}</div>
        <div className='userInfo__lastMessage'>{lastMessage}</div>
      </div> 
    </C.Container>
   );
}

export default UserCard;