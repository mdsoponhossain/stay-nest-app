import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa'
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
    console.log(location)
    const navigation = useNavigate();
    const { HandleFacebookLogin, setTwitterLogin,handleGoogleLogin } = useContext(AuthContext);
    const FacebookLogin = () => {
        HandleFacebookLogin()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const handleTwitterLogin = () => {
        setTwitterLogin()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.message)
            })
    }


    const logInWithGoogle = () => {
        handleGoogleLogin()
            .then((result) => {
                console.log(result.user)
                Swal.fire({
                    title: "Good job!",
                    text: "Your login is successfully done",
                    icon: "success"
                });
                navigation(location?.state ? location.state : '/')
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    return (
        <div className="mt-14">
            <div className="text-center">
                <button className="mr-4" onClick={FacebookLogin} ><FaFacebook className="text-4xl text-blue-700"></FaFacebook></button>
                <button onClick={handleTwitterLogin} ><FaTwitter className="text-4xl text-blue-700"></FaTwitter></button>
                <button className="ml-4" onClick={logInWithGoogle}><FaGoogle className="text-4xl text-green-500"></FaGoogle></button>
            </div>
        </div>
    );
};

export default SocialLogin;