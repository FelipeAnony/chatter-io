import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

import * as C from './styles';

import useMainContext from '../../hooks/useMainContext';

function ThemeSwitch() {

  const {state, dispatch} = useMainContext();

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