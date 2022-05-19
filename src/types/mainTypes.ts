export type ActionType = {
  type: string;
  payload: {
    [key: string]: any;
  };
};

export type ChildrenProp = {
  children: JSX.Element;
};