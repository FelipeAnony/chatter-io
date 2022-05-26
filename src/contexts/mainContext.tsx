import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

import { auth } from "../helpers/Api";

import { ChildrenProp, UserDataType } from "../types/mainTypes";

type ContextValueType = {
  userAuth: any;
  userData: UserDataType | null;
  theme: 'light' | 'dark' | string;
  currentChat: string;
  tmpUserData: any;
  setTmpUserData: React.Dispatch<any>;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  setUserData: React.Dispatch<React.SetStateAction<any>>;
  setCurrentChat: React.Dispatch<React.SetStateAction<string>>;
};

const contextInitialValue =  {
  userAuth: null,
  userData: null,
  theme: 'light',
  currentChat: '',
  tmpUserData: '',
  setTmpUserData: () => null,
  setCurrentChat: () => null,
  setTheme: () => null,
  setUserData: () => null
};

export const mainContext = createContext<ContextValueType>(contextInitialValue);

function ContextProvider({ children }: ChildrenProp) {
  const [theme, setTheme] = useState('light');
  const [userData, setUserData] = useState<any>(null);
  const [userAuth, setUserAuth] = useState<any>(null);
  const [currentChat, setCurrentChat] = useState<string>('');
  const [tmpUserData, setTmpUserData] = useState<any>(null);;

  useEffect(() => {
    onAuthStateChanged(auth, currentUser => {
      setUserAuth(currentUser);
    })
  }, []);
 
  return ( 
    <mainContext.Provider value={{userAuth, userData, theme, currentChat, tmpUserData, setTmpUserData, setCurrentChat, setTheme, setUserData}}>
      { children }
    </mainContext.Provider>
  );
}

export default ContextProvider;
