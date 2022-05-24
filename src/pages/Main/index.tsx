import { useState, useEffect } from 'react';
import logo from '../../images/logo.png';

import * as C from './styles';

import ChatAreaMenu from '../../components/ChatAreaMenu';
import AllChatsMenu from '../../components/AllChatsMenu';
import ThemeSwitch from '../../components/ThemeSwitch';

import useMainContext from '../../hooks/useMainContext';
import { getOrCreateDocumentOnDb, logout } from '../../helpers/Api';
import MainButton from '../../components/MainButton';

function Main() {
  const [isVisible, setIsVisible] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const { userAuth, user, setUser } = useMainContext();

  useEffect(() => {
    window.addEventListener('resize', () => setScreenWidth(window.innerWidth));
  }, []);

  useEffect(() => {
    console.log(user)
    const initialData = { ...user, 
      name: userAuth.displayName || user.name,
      email: userAuth.email,
      profileImage: userAuth.photoURL,
      chats: []
    } 

    const getUserData = async () => {
      const userData = await getOrCreateDocumentOnDb('users', userAuth.email, initialData);
      setUser(userData);
    }

    getUserData();

  }, []);

  const { theme } = useMainContext();
  
  return (
    <>
      <C.Container userTheme={theme}>
        <header>
          <div className="logo">
            <img src={logo} alt="chatter.io" />
          </div>
          <ThemeSwitch />
          <div className="logout">
            <MainButton
              onClickFn={() => logout()}
              title="Logout"
              color="#6800B9"
              size="60px"
            />
          </div>
        </header>
        <div className="innerContainer">
          <AllChatsMenu
            screenWidth={screenWidth}
            visibility={isVisible}
            setVisibility={setIsVisible}
          />
          <ChatAreaMenu
            screenWidth={screenWidth}
            visibility={isVisible}
            setVisibility={setIsVisible}
          />
        </div>
      </C.Container>
    </>
  );
}

export default Main;