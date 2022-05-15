import * as C from './styles';

type Props ={
  side: string;
}

function MessageBallon({side}: Props) {
  return ( 
    <C.Container
      ballonSide={side} 
    >
      <p className='textContainer'>
        aaaaaaaaaaaaaaaaaaaa aaaa aaaaaaaaaaaa
      </p>
    </C.Container>
   );
}

export default MessageBallon;