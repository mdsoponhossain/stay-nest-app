import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import Tittle from "../../SharedComponent/Tittle";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";


const SignUp = () => {

    const { handleSignUp } = useContext(AuthContext)
    const location = useLocation();
    const navigation = useNavigate();

    const handleSignUpFormSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);
        handleSignUp(email, password)
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    title: "Good job!",
                    text: "Your SignUp is successfully done",
                    icon: "success",
                    showConfirmButton: false,
                    timer:1500
                });
                navigation(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error.message)
            })

    }
    return (
        <div className="hero min-h-screen  dark:bg-black dark:text-slate-300  bg-base-200">
            <Tittle  title='stay-nest/sign-up'/>
            <div className="md:hero-content w-full flex-col ">
                <div className="card  dark:bg-black dark:text-slate-300 flex-shrink-0 w-full   md:w-[400px] h-fit shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center text-[#0cc4b0] pt-10">Sign Up </h1>
                    <form className="card-body w-full" onSubmit={handleSignUpFormSubmit}>
                    <SocialLogin></SocialLogin>

                    <p className="text-2xl font-bold text-center">Or</p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter Your Name" className="input input-bordered" required />
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
                            <button className="btn  text-white bg-[#0cc4b0] hover:bg-[#09ad9b]">Sign Up</button>
                            <label className="label">
                                <span>Have an account? please <Link to='/login' className="text-xl text-[#09ad9b] pl-2">LogIn</Link></span>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;