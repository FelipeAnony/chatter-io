export type ChildrenProp = {
  children: JSX.Element;
};

export type UserDataType = {
  id: string;
  name: string;
  chats: {
    lastMessage: string;
    lastMessageDate: {seconds: string};
    chatId: string;
    title: string; 
    image: string;
  }[];
  profileImage: string;
  
};