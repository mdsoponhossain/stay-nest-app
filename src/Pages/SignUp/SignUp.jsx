import { Link } from "react-router-dom";


const SignUp = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">

                <div className="card flex-shrink-0  w-[400px] h-[500px] shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center text-[#0cc4b0] pt-10">Sign Up </h1>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn  text-white bg-[#0cc4b0] hover:bg-[#09ad9b]">Login</button>
                            <label className="label">
                                <span>New here? please <Link to='/login' className="text-xl text-[#09ad9b] pl-2">LogIn</Link></span>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;