import * as C from './styles';

type Props ={
  side: string;
  message: string;
};

function MessageBallon({ side, message }: Props) {
  return ( 
    <C.Container
      ballonSide={side} 
    >
      <p className='textContainer'>
        {message}
      </p>
    </C.Container>
   );
};

export default MessageBallon;