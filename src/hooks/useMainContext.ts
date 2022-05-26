import { useContext } from "react";
import { mainContext } from "../contexts/mainContext";

function useMainContext() {
  const {userData, userAuth, theme, currentChat, tmpUserData, setTheme, setUserData, setCurrentChat, setTmpUserData} = useContext(mainContext);
  return {userData, userAuth, theme, currentChat, tmpUserData,setTheme, setUserData, setCurrentChat, setTmpUserData};
}

export default useMainContext;