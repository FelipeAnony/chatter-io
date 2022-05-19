import { useContext } from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

import * as C from './styles';

import { mainContext } from '../../contexts/mainContext';

function ThemeSwitch() {

  const {state, dispatch} = useContext(mainContext);

  return ( 
    <C.Container Theme={state.theme}>
      <div className='selector'>
        <div className='pointer'></div>
      </div>
      <div 
        className='darkIcon'
        onClick={() => dispatch({type: 'CHANGE_TO_DARK', payload:{}})}
      >
        <MdOutlineDarkMode />
      </div>
      <div 
        className='lightIcon'
        onClick={() => dispatch({type: 'CHANGE_TO_LIGHT', payload:{}})}
      >
        <MdOutlineLightMode />
      </div>
    </C.Container>
   );
}

export default ThemeSwitch;