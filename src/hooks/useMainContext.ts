import { useContext } from "react";
import { mainContext } from "../contexts/mainContext";

function useMainContext() {
  const {user, userAuth, theme, setTheme, setUser} = useContext(mainContext);
  return {user,userAuth, theme, setTheme, setUser};
}

export default useMainContext;