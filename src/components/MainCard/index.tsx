import * as C from './styles';

import { ChildrenProp } from '../../types/mainTypes';

function MainCard({ children }: ChildrenProp) {

  return ( 
    <C.Container>
      {children}
    </C.Container>
   );
}

export default MainCard;