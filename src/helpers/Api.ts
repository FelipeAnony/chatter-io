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