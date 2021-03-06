import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

import * as C from './styles';

import useMainContext from '../../hooks/useMainContext';

function ThemeSwitch() {

  const {theme, setTheme} = useMainContext();

  return ( 
    <C.Container Theme={theme}>
      <div className='selector'>
        <div className='pointer'></div>
      </div>
      <div 
        className='darkIcon'
        data-testid='dark'
        onClick={() => setTheme('dark')}
      >
        <MdOutlineDarkMode />
      </div>
      <div 
        className='lightIcon'
        data-testid='light'
        onClick={() => setTheme('light')}
      >
        <MdOutlineLightMode />
      </div>
    </C.Container>
   );
}

export default ThemeSwitch;