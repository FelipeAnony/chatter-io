import { ActionType } from "../types/mainTypes";

export type AuthStateType = any;

export const authReducer = (state:any , action: ActionType) => {
  switch(action.type){
    case 'CHANGE_AUTH': 
      return {...action.payload}
  }

  return state;
};