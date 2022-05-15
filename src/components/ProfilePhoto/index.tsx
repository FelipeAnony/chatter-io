import { IoPersonOutline } from 'react-icons/io5';

import * as C from './styles';

type Props = {
  imageSrc: string;
  size?: string;
};

function ProfilePhoto({ imageSrc, size }:Props) {
  return ( 
    <C.Container size={size}>
      {imageSrc ?
       <img 
         src={imageSrc}
         alt='profile'
       /> :
       <IoPersonOutline className='person'/>
      }
    </C.Container>
   );
}

export default ProfilePhoto;