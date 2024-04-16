import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword,GoogleAuthProvider, GithubAuthProvider, signOut, signInWithPopup, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    // social auth
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    
    // create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // update user
    const updateUserProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: image,
          })
    }

    // Sign in user
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    // google login
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // github login
    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    // logout user
    const logout = () => {
        setUser(null);
        setLoading(false);
        signOut(auth);
    } 

    // Observer
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
              setLoading(false);
            } 
          });
          return  () => unsubscribe();
    },[])

    const allValues = {
        createUser,
        signInUser,
        googleLogin,
        githubLogin,
        logout,
        user,
        setUser,
        loading,
        updateUserProfile,
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