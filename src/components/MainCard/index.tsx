import * as C from './styles';

type Props = {
  children: JSX.Element;
};

function MainCard({children}: Props) {

  return ( 
    <C.Container>
      {children}
    </C.Container>
   );
}

export default MainCard;