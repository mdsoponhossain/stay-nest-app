import { useState } from "react";



const UserComment = () => {
    const [rating ,setRaing] = useState();

    const hanldeRating =(e)=>{
        const rating = e.target.value ;
        console.log(rating)
        setRaing(rating)
    }

    const feedbackFormHandle =(e)=>{
        e.preventDefault();
        const name = e.target.name.value ;
        const email = e.target.email.value;
        // const rating = e.target.rating.value; 
        const comment = e.target.comment.value;
        const userFeedback = {name,email,comment};
        userFeedback.rating =rating ;
        console.log(userFeedback)
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">

                <div className="card flex-shrink-0  w-[400px] h-fit shadow-2xl bg-base-100">
                    <h1 className="text-3xl font-bold text-center text-[#0cc4b0] pt-10">Client Feedback </h1>
                    <form className="card-body" onSubmit={feedbackFormHandle}>
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
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Rating(out of 5)</span>
                            </label>
                            <select className="border h-12 rounded-lg" name="type" id="type" onChange={hanldeRating} >
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>

                            </select>

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Comment</span>
                            </label>
                            <input type="text" name="comment" placeholder="Enter Your Comment" className="input input-bordered" />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn  text-white bg-[#0cc4b0] hover:bg-[#09ad9b]">Submit</button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserComment;