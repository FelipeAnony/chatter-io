import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

import { auth } from "../helpers/Api";

import { ChildrenProp } from "../types/mainTypes";

type ContextValueType = {
  userAuth: any;
  user: any;
  theme: 'light' | 'dark' | string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  setUser: React.Dispatch<React.SetStateAction<any>>;
};

const contextInitialValue =  {
  userAuth: null,
  user: null,
  theme: 'light',
  setTheme: () => null,
  setUser: () => null
};

export const mainContext = createContext<ContextValueType>(contextInitialValue);

function ContextProvider({ children }: ChildrenProp) {
  const [theme, setTheme] = useState('light');
  const [user, setUser] = useState<any>(null);
  const [userAuth, setUserAuth] = useState<any>(null);

  useEffect(() => {
    onAuthStateChanged(auth, currentUser => {
      setUserAuth(currentUser);
    })
  }, []);
 
  return ( 
    <mainContext.Provider value={{userAuth, user, theme, setTheme, setUser}}>
      { children }
    </mainContext.Provider>
  );
}

export default ContextProvider;
