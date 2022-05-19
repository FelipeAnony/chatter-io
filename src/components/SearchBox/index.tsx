import { useContext } from 'react';
import { BsSearch } from 'react-icons/bs';
import { mainContext } from '../../contexts/mainContext';

import * as C from './styles';


function SearchBox() {
  const {state, dispatch} = useContext(mainContext);

  return ( 
    <C.Container 
      userTheme={state.theme}
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