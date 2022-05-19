import { useState, useEffect, useContext } from 'react';
import logo from '../../images/logo.png';

import * as C from './styles';

import ChatAreaMenu from '../../components/ChatAreaMenu';
import AllChatsMenu from '../../components/AllChatsMenu';
import ThemeSwitch from '../../components/ThemeSwitch';
import { mainContext } from '../../contexts/mainContext';

function Main() {
  const [isVisible, setIsVisible] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => setScreenWidth(window.innerWidth));
  }, []);

  const {state, dispatch} = useContext(mainContext);

  console.log(state);
  
  return (
    <C.Container userTheme={state.theme}>
      <header>
        <div className='logo'>
          <img src={logo} alt='chatter.io' />
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
   );
}

export default Main;