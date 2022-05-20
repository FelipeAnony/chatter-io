import { useContext } from "react";
import { mainContext } from "../contexts/mainContext";

function useMainContext() {
  const {state, dispatch} = useContext(mainContext);
  return {state, dispatch};
}

export default useMainContext;