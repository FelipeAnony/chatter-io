import { GrEmoji } from 'react-icons/gr';
import { AiOutlineSend } from 'react-icons/ai';

import * as C from './styles';

type Props = {
  emojiIsOpen: boolean;
  inputMsg: string;
  setEmojiIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setInputMsg: React.Dispatch<React.SetStateAction<string>>;
  handlerClick: () => any;
};

function WriteMsgArea({emojiIsOpen, inputMsg,  setEmojiIsOpen, setInputMsg, handlerClick}: Props) {
  return ( 
    <C.Container onKeyUp={(e) => e.key === 'Enter' && handlerClick()}>
        <div 
          className='emojiButton'
          onClick={() => setEmojiIsOpen(!emojiIsOpen)}
        >
          <GrEmoji/>
        </div>
        <input 
          type='text'
          placeholder='Write your message...'
          autoFocus
          value={inputMsg}
          onChange={(e) => setInputMsg(e.target.value)}
        />
        <div 
          className='sendButton'
          onClick={handlerClick}
        >
          <AiOutlineSend />
        </div>
    </C.Container>
   );
}

export default WriteMsgArea;