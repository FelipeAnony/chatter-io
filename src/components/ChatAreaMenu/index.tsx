import * as C from './styles';
import { BiLeftArrowAlt } from 'react-icons/bi';
import MessageBallon from '../MessageBallon';
import WriteMsgArea from '../WriteMsgArea';
import ProfilePhoto from '../ProfilePhoto';

type Props = {
  screenWidth: number;
  visibility: boolean;
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
};

function ChatArea({ screenWidth, visibility, setVisibility }:Props) {

  return (
    <C.Container isVisible={screenWidth < 830 ? !visibility : true}>
      <div className='chatInfo'>
        <div 
          className='chatInfo__backButton'
          onClick={() => setVisibility(true)}
        >
          <BiLeftArrowAlt />
        </div>
        <ProfilePhoto 
          imageSrc=''
          size='small'  
        />
        <div className='chatInfo__chatTitle'>
          Testing...
        </div>
      </div>
      <div className='messagesContainer'>
          <MessageBallon side='left'/>
      </div>
      <WriteMsgArea />
    </C.Container>
   );
}

export default ChatArea;