import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaGoogle } from 'react-icons/fa'
import Swal from "sweetalert2";



const Login = () => {

    const { handleLogIn, handleGoogleLogin } = useContext(AuthContext);
    const location = useLocation();
    console.log(location)
    const navigation = useNavigate();

    const handleLogInFormSubmit = (e) => {
        e.preventDefault()

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        handleLogIn(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    title: "Good job!",
                    text: "Your login is successfully done",
                    icon: "success"
                });
                navigation(location?.state ? location.state : '/')
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
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">

                <div className="card flex-shrink-0  w-[400px] h-fit shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center text-[#0cc4b0] pt-10">Login </h1>
                    <form onSubmit={handleLogInFormSubmit} className="card-body">
                        <div className="w-full mb-1">
                            <button onClick={logInWithGoogle} className=" w-full btn btn-outline"><FaGoogle className="text-2xl"></FaGoogle> Continue With Google</button>
                        </div>

                        <div className="w-full grid justify-center">

                            <span className="text-xl inline-block font-bold text-gray-500">Or</span>

                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Enter Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Enter Your Password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn  text-white bg-[#0cc4b0] hover:bg-[#09ad9b]">Login</button>
                            <label className="label">
                                <span>New here? please <Link to='/signUp' className="text-xl text-[#09ad9b] pl-2">SignUp</Link></span>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;