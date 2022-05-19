import { createContext } from "react";

import { InitialStateType, initialStateValue, useMainReducer } from "../reducers/mainReducer";
import { ActionType, ChildrenProp } from "../types/mainTypes";

type ContextValueType = {
  state: InitialStateType;
  dispatch: React.Dispatch<ActionType>;
};

const contextInitialValue =  {
  state: initialStateValue,
  dispatch: () => null
}

export const mainContext = createContext<ContextValueType>(contextInitialValue);

function ContextProvider({ children }: ChildrenProp) {
  const [state, dispatch] = useMainReducer();

  return ( 
    <mainContext.Provider value={{state, dispatch}}>
      { children }
    </mainContext.Provider>
   );
}

export default ContextProvider;
