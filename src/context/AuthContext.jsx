import React, { useState, useEffect, createContext, useContext } from 'react';
import { auth } from '../firebase/firebase.config';
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    console.log('error creating auth context');
  }
  return context;
};
export function AuthProvider({ children }) {
  const [user, setUser] = useState('');
  
  useEffect(() => {
    const subscribed = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        console.log('no hay usuario suscrito');
        setUser('');
      } else {
        setUser(currentUser);
      }
    });
    return () => subscribed();
  }, []);

  const loginWithGoogle = async () => {
    const responseGoogle = new GoogleAuthProvider();
    return await signInWithPopup(auth, responseGoogle);
  };

  const logout = async () => {
    const response = await signOut(auth);
    console.log(response);
  };

  return (
    <authContext.Provider
      value={{
        loginWithGoogle,
        logout,
        user
      }}>
      {children}
    </authContext.Provider>
  );
}
