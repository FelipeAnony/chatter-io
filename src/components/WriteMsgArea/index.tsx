import { GrEmoji } from 'react-icons/gr';
import { AiOutlineSend } from 'react-icons/ai';

import * as C from './styles';

type Props = {
  emojiIsOpen: boolean;
  inputMsg: string;
  setEmojiIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setInputMsg: React.Dispatch<React.SetStateAction<string>>;
};

function WriteMsgArea({emojiIsOpen, inputMsg,  setEmojiIsOpen, setInputMsg}: Props) {
  return ( 
    <C.Container>
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
        <div className='sendButton'>
          <AiOutlineSend />
        </div>
    </C.Container>
   );
}

export default WriteMsgArea;