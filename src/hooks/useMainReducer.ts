import { useReducer } from "react";
import { initialStateValue, mainReducer } from "../reducers/mainReducer";

export const useMainReducer = () => {
  return useReducer(mainReducer, initialStateValue);
};