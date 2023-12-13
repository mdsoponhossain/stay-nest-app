import { FacebookAuthProvider, GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import axios from "axios";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [updateRoom ,setUpdateRoom] = useState()
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    // modeTheme;
    const [theme, setTheme] = useState(null);
    useEffect(()=>{
        if(window.matchMedia('(prefers-color-schema:dark)').matches){
            setTheme('dark');
        }
        else{
            setTheme('light');
        }
    },[]);


    useEffect(()=>{
        if(theme === 'dark'){
            document.documentElement.classList.add('dark');
        }
        else{
            document.documentElement.classList.remove("dark");
        }
    },[theme])


    const handleThemeSwitch=()=>{
        setTheme(theme === "dark" ? "light" : "dark");
    }









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

    const HandleFacebookLogin = ()=>{
        setLoading(true);
        const FBprovider = new FacebookAuthProvider();
        return signInWithPopup(auth,FBprovider);
    }
    const setTwitterLogin =()=>{
        setLoading(true);
        const twitterProvider = new TwitterAuthProvider();
        return signInWithPopup(auth,twitterProvider);
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

                axios.post('https://stay-nest-server.vercel.app/access-token', userInfo, { withCredentials: true })
                    .then(res => {
                        console.log(11111, res.data)
                    })



                }

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
        handleGoogleLogin,
        HandleFacebookLogin,
        setUpdateRoom,
        updateRoom,
        setTwitterLogin,
        handleThemeSwitch

    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;