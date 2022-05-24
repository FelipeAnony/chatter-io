import * as C from './styles';

import ProfilePhoto from '../ProfilePhoto';

import useMainContext from '../../hooks/useMainContext';
import { formatDateByTimestamp } from '../../helpers/dateFormater';

type Props = {
  chatTitle: string;
  profileImageLink: string;
  lastMessage: string;
  date: string;
  setVisibility:  React.Dispatch<React.SetStateAction<boolean>>;
};

function ChatCard({chatTitle, profileImageLink, lastMessage, date, setVisibility}: Props) {
  const { theme } = useMainContext();

  return ( 
    <C.Container 
      userTheme={theme}
      onClick={() => setVisibility(false)}
    >
      <ProfilePhoto imageSrc={profileImageLink}/>
      <div className='userInfo'>
        <div className='userInfo__name'>{chatTitle}</div>
        <div className='userInfo__lastMessage'>{lastMessage}</div>
        <div className='userInfo__date'>{formatDateByTimestamp(date)}</div>
      </div> 
    </C.Container>
   );
}

export default ChatCard;