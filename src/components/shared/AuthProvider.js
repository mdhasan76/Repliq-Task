import React, { createContext, useEffect, useState } from 'react';
import { 
    createUserWithEmailAndPassword, 
    deleteUser, 
    getAuth, 
    GoogleAuthProvider, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signInWithPopup, 
    signOut, 
    updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config'

const auth = getAuth(app)
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    // Google Log in
    const googleLogIn = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    // Create New user 
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Log in user 
    const logInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    //log out User 
    const logOut = () =>{
        return signOut(auth)
    }

    // update User 
    const updateUser = (name) =>{
        return updateProfile(auth.currentUser,{displayName: name})
    }

    //delete User 
    const removeUser = () => {
        return deleteUser(auth.currentUser)
    }

    useEffect( () =>{
        const unsubscrib = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser)
            setLoading(false)
        })

        return () => unsubscrib()
    },[])

    const authInfo = { user, 
        setUser, 
        googleLogIn, 
        createUser, 
        logInUser, 
        updateUser,
        removeUser,
        logOut,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            { children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;