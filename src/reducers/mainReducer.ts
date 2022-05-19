import { useReducer } from "react";

import { authReducer, AuthStateType } from "./authReducer";
import { themeReducer, ThemeStateType } from "./themeReducer";
import { ActionType } from "../types/mainTypes";

export type InitialStateType = {
  auth: AuthStateType;
  theme: ThemeStateType;
};

export const initialStateValue = {
  auth: {},
  theme: 'light'
};

const mainReducer = ({auth, theme}: InitialStateType, action:ActionType) => {
  return {
    auth: authReducer(auth, action),
    theme: themeReducer(theme, action)
  };
};

export const useMainReducer = () => {
  return useReducer(mainReducer, initialStateValue);
};