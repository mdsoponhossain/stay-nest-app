import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { FaGoogle } from 'react-icons/fa'
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const navigation = useNavigate();
    const location = useLocation();
    const { handleGoogleLogin } = useContext(AuthContext);
  

   

    const logInWithGoogle = () => {
        handleGoogleLogin()
            .then(() => {
                Swal.fire({
                    title: "Good job!",
                    text: "Your login is successfully done",
                    icon: "success"
                });
                navigation(location?.state ? location.state : '/')
            })
            .catch(() => {
            })
    }

    return (
        <div className="mb-3" >
            <div className="text-center">
                <button className="ml-4" onClick={logInWithGoogle}><FaGoogle className="text-5xl text-green-500"></FaGoogle></button>
            </div>
        </div>
    );
};

export default SocialLogin;