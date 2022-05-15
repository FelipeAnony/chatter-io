import { GrEmoji } from 'react-icons/gr';
import { AiOutlineSend } from 'react-icons/ai';

import * as C from './styles';

function WriteMsgArea() {
  return ( 
    <C.Container>
        <div className='emojiButton'>
            <GrEmoji/>
        </div>
        <input 
          type='text'
          placeholder='Write your message...'
          autoFocus
        />
        <div className='sendButton'>
          <AiOutlineSend />
        </div>
    </C.Container>
   );
}

export default WriteMsgArea;