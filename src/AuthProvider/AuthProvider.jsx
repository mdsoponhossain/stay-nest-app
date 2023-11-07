import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import axios from "axios";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading]= useState(true)
    const handleSignUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const handleLogIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }

    const handleLogOut =()=>{
        setLoading(true)
        return signOut(auth);
    }
    useEffect(()=>{
        onAuthStateChanged(auth,(currentUser)=>{
            console.log('the user from the authProvider:', currentUser)
            setUser(currentUser);
            setLoading(false);
            const email = currentUser.email;
            const userInfo = {email}
            axios.post('http://localhost:5000/access-token',userInfo,{withCredentials:true})
            .then(res=>{
                console.log(11111,res.data)
            })

        })
    },[])

    const info = { 
        handleSignUp,
        handleLogIn,
        handleLogOut,
        user,
        loading

    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;