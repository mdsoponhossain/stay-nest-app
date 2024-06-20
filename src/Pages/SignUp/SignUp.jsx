import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import Tittle from "../../SharedComponent/Tittle";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import axios from "axios";
import { useForm } from "react-hook-form";


const SignUp = () => {

    const { handleSignUp, updateUserProfile } = useContext(AuthContext)
    const location = useLocation();
    const navigation = useNavigate();

    const img_hosting_api = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_BB_API_KEY}`


    const {
        register,
        handleSubmit,
    } = useForm();

    const handleFormSubmit = async (data) => {
        console.log(data);
        const name = data.name;
        const email = data.email;
        const password = data.password;
        const imageFile = { image: data.image[0] }
        const res = await axios.post(img_hosting_api, imageFile, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })

        console.log('image hosting result data:11', data.image[0])
        if (res.data.success) {
            const userInfo = {
                displayName: name,
                photoURL: res.data.data.url
            }
            handleSignUp(email, password)
                .then(() => {
                    updateUserProfile(userInfo)
                        .then(async () => {
                            Swal.fire({
                                position: "top-center",
                                icon: "success",
                                title: "Your sign up  is successfully done",
                                showConfirmButton: false,
                                timer: 1500
                            });

                            navigation(location?.state ? location.state : '/')
                        })
                        .catch(() => {
                        })
                })
                .catch(() => {
                })
        }
    }


    return (
        <div className="hero min-h-screen pt-8  dark:bg-black dark:text-slate-300  bg-base-200">
            <Tittle title='stay-nest/sign-up' />
            <div className="md:hero-content w-full flex-col">
                <div className="card  dark:bg-black dark:text-slate-300 flex-shrink-0 w-[97%] mx-auto  md:w-[500px] h-fit shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center text-[#0cc4b0] pt-10">Sign Up </h1>
                    <form className="card-body w-full" onSubmit={handleSubmit(handleFormSubmit)}>
                        <SocialLogin></SocialLogin>

                        <p className="text-2xl font-bold text-center">Or</p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} placeholder="Enter Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="Enter Your Email" className="input input-bordered" required />
                        </div>

                        {/* photo uploading */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Photo</span>
                            </label>
                            <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                        </div>




                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", { required: true })} placeholder="Enter Your Password" className="input input-bordered" required />
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