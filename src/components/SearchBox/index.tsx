import { BsSearch } from 'react-icons/bs';

import * as C from './styles';


function SearchBox() {
  return ( 
    <C.Container>
      <button>
        <BsSearch />
      </button>
      <input 
        type='text' 
        placeholder='Search for users'  
      />
    </C.Container>
   );
}

export default SearchBox;