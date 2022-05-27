import * as C from './styles';
import { BiMessageRoundedAdd } from 'react-icons/bi';
import { SetStateAction } from 'react';

type Props = {
  setVisibility: React.Dispatch<SetStateAction<boolean>>;
};

function NewChatButton({ setVisibility }: Props) {
  return ( 
    <C.Container
      onClick={() => setVisibility(true)}
    >
      <BiMessageRoundedAdd />
    </C.Container>
   );
}

export default NewChatButton;