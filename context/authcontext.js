import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";
const Authcontext = React.createContext();

export function useAuth() {
  return useContext(Authcontext);
}
export function Authprovider({ children }) {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();

  //useeffect

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);


  //signin function
  function signin(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  //signout function
  function signout() {
    return signOut(auth);
  }

  const value = {
    currentUser,
    signin,
    signout,
  };

  return (
    <Authcontext.Provider value={value}>
      {!loading && children}
    </Authcontext.Provider>
  );
}
