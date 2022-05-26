import { useState, useEffect } from 'react';
import logo from '../../images/logo.png';

import * as C from './styles';

import ChatAreaMenu from '../../components/ChatAreaMenu';
import AllChatsMenu from '../../components/AllChatsMenu';
import ThemeSwitch from '../../components/ThemeSwitch';

import useMainContext from '../../hooks/useMainContext';
import { getDataFromDb, getOrCreateDocumentOnDb, getUserDataFromDbFake, logout } from '../../helpers/Api';
import MainButton from '../../components/MainButton';

function Main() {
  const [isVisible, setIsVisible] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const { theme, userAuth, tmpUserData, setUserData } = useMainContext();

  useEffect(() => {
    window.addEventListener('resize', () => setScreenWidth(window.innerWidth));
  }, []);

  useEffect(() => {
    //buscar info do usuario conectado atraves do email disponivel
    //en userAuth e setar userData com essa info

    const getUserData = async () => {
      //pegar info na db relacionadas ao user atual
      const initialUserData = {
        name: tmpUserData || '',
        email: userAuth.email,
        userAvatar: '',
        chats: []
      };

      const tmpData = await getOrCreateDocumentOnDb('users', userAuth.email, initialUserData)
      setUserData(tmpData);

    };

    getUserData();

  }, []);

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