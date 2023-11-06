import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import auth from "../Firebase/Firebase.config";


export  const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const handleSignUp = (email, password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const info = {handleSignUp}
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;