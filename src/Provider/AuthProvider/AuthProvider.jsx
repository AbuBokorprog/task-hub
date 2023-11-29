import React, { createContext, useEffect, useState } from "react";
export const AuthContext = createContext(null);
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  GithubAuthProvider,
  signOut,
} from "firebase/auth";
import { app } from "../../Firebase/Firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const auth = getAuth(app);
  const GoogleProvider = new GoogleAuthProvider();
  const GithubProvider = new GithubAuthProvider();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoader(false);
      setUser(currentUser);
    });
    return () => {
      return unSubscribe();
    };
  }, []);

  const google = () => {
    return signInWithPopup(auth, GoogleProvider);
  };

  const Github = () => {
    return signInWithPopup(auth, GithubProvider);
  };

  const logout = () => {
    return signOut(auth);
  };

  const authInfo = { user, google, Github, logout, loader };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
