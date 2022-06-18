import * as C from './styles';
import { BiMessageRoundedAdd } from 'react-icons/bi';
import { SetStateAction } from 'react';

type Props = {
  setNewChatWindowVisibility: React.Dispatch<SetStateAction<boolean>>;
};

function NewChatButton({ setNewChatWindowVisibility }: Props) {
  return (
    <C.Container onClick={() => setNewChatWindowVisibility(true)}>
      <BiMessageRoundedAdd />
    </C.Container>
  );
}

export default NewChatButton;
