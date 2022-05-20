import { useContext } from "react";
import { mainContext } from "../contexts/mainContext";

function useMainContext() {
  const {user, theme, setTheme} = useContext(mainContext);
  return {user, theme, setTheme};
}

export default useMainContext;