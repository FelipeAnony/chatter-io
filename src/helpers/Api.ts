import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from 'firebase/auth';

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