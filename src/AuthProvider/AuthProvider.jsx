import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import axios from "axios";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true)
    const handleSignUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const handleLogIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }


    const handleGoogleLogin = ()=>{
        setLoading(true);
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth,provider);


    }





    const handleLogOut = () => {
        setLoading(true)
        return signOut(auth);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('the user from the authProvider:', currentUser)
            setUser(currentUser);
            setLoading(false);
            const email = currentUser.email;
            const userInfo = { email }
            if (currentUser) {

                axios.post('http://localhost:5000/access-token', userInfo, { withCredentials: true })
                    .then(res => {
                        console.log(11111, res.data)
                    })
            }

            // else {
            //     axios.post('http://localhost:5000/clear-token', userInfo, { withCredentials: true })
            //         .then(res => {
            //             console.log(222222222, res.data)
            //         })
            // }




        })

        return () => {
            return unsubscribe();
        }

    }, [])

    const info = {
        handleSignUp,
        handleLogIn,
        handleLogOut,
        user,
        loading,
        handleGoogleLogin

    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;