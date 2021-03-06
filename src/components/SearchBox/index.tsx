import { BsSearch } from 'react-icons/bs';
import useMainContext from '../../hooks/useMainContext';

import * as C from './styles';


function SearchBox() {
  const { theme } = useMainContext();

  return ( 
    <C.Container 
      userTheme={theme}
    >
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