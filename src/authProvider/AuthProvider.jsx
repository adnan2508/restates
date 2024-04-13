import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext } from 'react';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const allValues ={
        createUser
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