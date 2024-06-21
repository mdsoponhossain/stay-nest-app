import { useState } from "react";
import Tittle from "../../SharedComponent/Tittle";
import {  useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";




const UpdateBooking = () => {
    const [date, setDate] = useState();
    const navigation = useNavigate();

    const { id } = useParams();

    const handleDate = (e) => {
        setDate(e.target.value)
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const updateDate = { date }
        fetch(`https://stay-nest-server-side.vercel.app/update-date/${id}`, {
            method: 'PATCH',
            credentials:'include',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updateDate)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        title: "Good job!",
                        text: "Your room date  is  updated successfully",
                        showConfirmButton: false,
                        icon: "success",
                        timer: 1500

                    });
                    return navigation('/my-bookings')
                }

            })

    }









    return (
        <div className="hero min-h-screen bg-base-200  dark:bg-black dark:text-slate-300 ">
            <Tittle title='stay-nest/update-booking-info' />
            <div className="hero-content flex-col ">

                <div className="card flex-shrink-0 w-[100%]  md:w-[400px] h-fit shadow-2xl bg-base-100">
                    <h1 className="text-3xl dark:bg-slate-800 dark:text-white px-3 font-bold text-center text-[#0cc4b0] pt-10">Update booking date </h1>
                    <form onSubmit={handleFormSubmit} className="card-body dark:bg-slate-800 dark:text-white ">


                        <input onChange={handleDate} placeholder="Select Date" className="dark:bg-slate-700 w-full border dark:border-0  h-16" type="date" name="" id="" required />




                        <div className="form-control mt-6">
                            <button className="btn  text-white bg-[#0cc4b0] hover:bg-[#09ad9b]">Update</button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateBooking;