import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword,GoogleAuthProvider, GithubAuthProvider, signOut, signInWithPopup } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    console.log(user);
    
    // social auth
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    
    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Sign in user
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }

    // google login
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // github login
    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider)
    }

    // logout user
    const logout = () => {
        setUser(null);
        signOut(auth);
    } 

    // Observer
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            } 
          });
    },[])

    const allValues ={
        createUser,
        signInUser,
        googleLogin,
        githubLogin,
        logout,
        user
    }
    return (
        <div>
            <AuthContext.Provider value={allValues}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;