import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const handleSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const handleLogIn = (email, password) => {
        return signInWithEmailAndPassword(auth,email,password);
    }

    const handleLogOut =()=>{
        return signOut(auth);
    }
    useEffect(()=>{
        onAuthStateChanged(auth,(currentUser)=>{
            console.log('the user from the authProvider:', currentUser)
            setUser(currentUser)
        })
    },[])

    const info = { 
        handleSignUp,
        handleLogIn,
        handleLogOut,
        user,

    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;