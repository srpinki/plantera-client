import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged,  signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"

import { auth } from "../Firebase/firebase.config";
import { useEffect, useState } from "react"
import { AuthContext } from "./Context";

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword (auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log("Current user in auth state changed", currentUser);
            setUser(currentUser)
            setLoading(false);
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const userInfo = {
        user,
        createUser,
        loginUser,
        setUser,
        logOut,
        loading,
        googleSignIn,
        updateUser
    } 

    return (
        <AuthContext value={userInfo}>{children}</AuthContext>
    )
}

export default AuthProvider;