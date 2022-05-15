import * as C from './styles';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { useState } from 'react';

function ThemeSwitch() {
  const [theme, setTheme] = useState('light');

  return ( 
    <C.Container Theme={theme}>
      <div className='selector'>
        <div className='pointer'></div>
      </div>
      <div 
        className='darkIcon'
        onClick={() => setTheme('dark')}
      >
        <MdOutlineDarkMode />
      </div>
      <div 
        className='lightIcon'
        onClick={() => setTheme('light')}
      >
        <MdOutlineLightMode />
      </div>
    </C.Container>
   );
}

export default ThemeSwitch;