import { useState, useEffect } from 'react';
import logo from '../../images/logo.png';

import * as C from './styles';

import ChatAreaMenu from '../../components/ChatAreaMenu';
import AllChatsMenu from '../../components/AllChatsMenu';
import ThemeSwitch from '../../components/ThemeSwitch';

import useMainContext from '../../hooks/useMainContext';
import { logout } from '../../helpers/Api';
import { Navigate } from 'react-router-dom';

function Main() {
  const [isVisible, setIsVisible] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => setScreenWidth(window.innerWidth));
  }, []);

  const {user, theme} = useMainContext();
  
  return (
    <>
    {!user ? <Navigate to={'/login'}/> : 
    <C.Container userTheme={theme}>
      <header>
        <div className='logo'>
          <img src={logo} alt='chatter.io' />
        </div>
        <div className='logout'>
          <button onClick={() => logout()}>Logout</button>
        </div>
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
    }
    </>
   );
}

export default Main;