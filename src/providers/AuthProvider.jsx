import React, {  createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth,email, password)
    }

    const signIn = (email,password)=>{
        return signInWithEmailAndPassword(auth, email,password)
    }

    const logOut = ()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            console.log('auth state change', currentUser);
            setUser(currentUser)
            setIsLoading(false)
        })
        return()=>{
            unsubscribe();
        }
    },[])
    const authInfo = {
        user,
        isLoading,
        createUser,
        signIn,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;