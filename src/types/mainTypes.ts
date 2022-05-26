export type ChildrenProp = {
  children: JSX.Element;
};

export type UserDataType = {
  name: string;
  email: string;
  chats: {
    chatId: string;
  }[];
  userAvatar: string;
};

export type ChatDataType = {
  messages:
  {
    author: string;
    body: string;
    date: number;
  }[];
  title: string;
  chatAvatar: string;
  lastMessage: string;
  lastMessageDate: number;
};
