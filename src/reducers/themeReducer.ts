import { ActionType } from "../types/mainTypes";

export type ThemeStateType = 'light' | 'dark' | string;

export const themeReducer = (state: ThemeStateType, action: ActionType) => {
  switch(action.type) {
    case 'CHANGE_TO_DARK':
      return 'dark';
    case 'CHANGE_TO_LIGHT':
      return 'light';
  }

  return state;
};