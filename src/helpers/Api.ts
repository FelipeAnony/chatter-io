import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  addDoc,
  query,
  where,
  Firestore,
  getDoc,
  setDoc,
  onSnapshot,
  updateDoc,
  arrayUnion,
  serverTimestamp,
} from "firebase/firestore";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";

import firebaseConfig from './firebaseConfig';
import { ChatDataType } from '../types/mainTypes';

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);

export const signup = (email: string, password: string) => (
  createUserWithEmailAndPassword(auth, email, password)
);

export const login = (email: string, password: string) => (
  signInWithEmailAndPassword(auth, email, password)
);

export const logout = () => signOut(auth);

export const loginWithGoogle = async () => {
  const googleProvider = new GoogleAuthProvider()
  await signInWithPopup(auth, googleProvider)
};

export const resetPassword = (email: string) => (
  sendPasswordResetEmail(auth, email)
);

export const getDataFromDb = async (collectionName: string ) => {
  const tmpdata = await getDocs(collection(db, collectionName));
  let data: any = [];

  tmpdata.forEach((doc) => {
    data.push({id: doc.id, data: doc.data()});
  });

  return data;
};








export const getOrCreateDocumentOnDb = async (docName: string, docId: string, dataToCreate?: any) => {
  const docRef = doc(db, `${docName}/${docId}`);
  const consult = await getDoc(docRef);
  if(consult.exists()) {
    const data = consult.data();
    return data;

  } else {
    await setDoc(docRef, {...dataToCreate})
    const consult = await getDoc(docRef);
    const data = consult.data();
    return data;
  }
};

export const getIndividualChatDataFromDb = async (chatId: string) => {
  const docRef = doc(db, `chats/${chatId}`);
  const consult = await getDoc(docRef);
  const data = consult.data();

  return data;
};


export const sendMessage = async (docId: string, data: any) => {
  const docRef = doc(db, 'chats', `${docId}`);

  await updateDoc(docRef, {
    lastMessage: data.body,
    lastMessageDate: serverTimestamp(),
    messages: arrayUnion(data)
  });
};

export const getUserDataFromDb = (userEmail: string) => {
  //get dados na db usando o userEmail:
  const userData = {
    name: 'felipe',
    email: 'felipemom2001@gmail.com',
    userAvatar: '',
    chats: [
      {chatId: 'abcdefg1234567'},
      {chatId: '123456789'}
    ]
  };

}
//Fake Api: 

export const getUserDataFromDbFake = (userEmail: string) => {
  //get dados na db usando o userEmail:
  const userData = {
    name: 'felipe',
    email: 'felipemom2001@gmail.com',
    userAvatar: '',
    chats: [
      {chatId: 'abcdefg1234567'},
      {chatId: '123456789'}
    ]
  };

  //caso nao existir data do usuario (login via signup) criar uma

  return userData;
}

export const getChatDataFromDbFake = (chatId: string) => {
  //pega dados no db de acordo com o chatId passado por parametro

  if(chatId === 'abcdefg1234567') {
    const chatData = {
      messages: [
        {
          author: 'felipemom001@gmail.com',
          body: 'eai',
          date: + new Date() / 1000
        },
        {
          author: 'suporte@gmail.com',
          body: 'hi',
          date: + new Date() / 1000
        }
      ],
      title: 'Pedro',
      chatAvatar: '',
      lastMessage: 'hi',
      lastMessageDate: + new Date()
    };
    return chatData;
  } else {
    const chatData = {
      messages: [
        {
          author: 'felipemom001@gmail.com',
          body: 'ohayougozaimasu',
          date: + new Date() / 1000
        },
        {
          author: 'felipemom001@gmail.com',
          body: 'ohayou',
          date: + new Date() / 1000
        }
      ],
      title: 'Pedro p',
      chatAvatar: '',
      lastMessage: 'hi',
      lastMessageDate: + new Date()
    };
    return chatData;
  }
};
