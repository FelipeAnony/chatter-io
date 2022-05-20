import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

import { auth } from "../helpers/Api";

import { ChildrenProp } from "../types/mainTypes";

type ContextValueType = {
  user: any;
  theme: 'light' | 'dark' | string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
};

const contextInitialValue =  {
  user: null,
  theme: 'light',
  setTheme: () => null
};

export const mainContext = createContext<ContextValueType>(contextInitialValue);

function ContextProvider({ children }: ChildrenProp) {
  const [theme, setTheme] = useState('light');
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    })
  }, []);
 
  return ( 
    <mainContext.Provider value={{user, theme, setTheme}}>
      { children }
    </mainContext.Provider>
  );
}

export default ContextProvider;
