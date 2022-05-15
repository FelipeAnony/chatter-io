import { useState, useEffect } from 'react';

import * as C from './styles';

import ChatAreaMenu from '../../components/ChatAreaMenu';
import AllChatsMenu from '../../components/AllChatsMenu';
import ThemeSwitch from '../../components/ThemeSwitch';

function Main() {
  const [isVisible, setIsVisible] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => setScreenWidth(window.innerWidth));
  }, []);

  
  return ( 
    <C.Container>
      <header>
        <div className='logo'>Chatter.io</div>
        <ThemeSwitch />
      </header>
      <div className='innerContainer'>
        <AllChatsMenu 
          screenWidth={screenWidth} 
          visibility={isVisible} 
          setVisibility= {setIsVisible}
        />
        <ChatAreaMenu 
          screenWidth={screenWidth}
          visibility={isVisible} 
          setVisibility= {setIsVisible}
        />
      </div>
    </C.Container>
   );
}

export default Main;