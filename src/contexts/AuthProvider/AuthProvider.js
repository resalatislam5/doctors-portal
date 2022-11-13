import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';

const auth = getAuth(app)
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [loading,setLoading] = useState(true)
    const [user,setUser] = useState(null)
    const Login = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const SignUP = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    useEffect(()=>{
            const unSubscribe = onAuthStateChanged(auth,currentUser=>{
                    console.log(currentUser)
            setUser(currentUser)
                })
                return () => unSubscribe()
            },[])
    const LogOutUser= () =>{
        return signOut(auth)
    }
    const updateUserProfile = name =>{
       return updateProfile(auth.currentUser, {
            displayName: name,
          })
    }
        const authInfo = {
            Login,
            SignUP,
            updateUserProfile,
            LogOutUser,
            user
        }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;