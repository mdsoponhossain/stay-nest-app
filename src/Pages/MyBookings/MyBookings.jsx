import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import moment from "moment/moment";
import Tittle from "../../SharedComponent/Tittle";


const MyBookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const axiosSecure = useAxiosSecure();

    const userEmail = user?.email;


    useEffect(() => {
        axiosSecure.get(`/my-bookings/${userEmail}`, { withCredentials: true })
            .then(res => {
                setBookings(res.data)
            })
    }, [userEmail, axiosSecure]);


    const handleDelete = (_id, id, date) => {
        const currentDate = new Date();
        const givenDateString = date;
        const givenDate = new Date(givenDateString);
        if (givenDate - currentDate > 86400000) {

            Swal.fire({
                title: "Are you sure to delete booking ?",

                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "confirm"
            }).then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://stay-nest-server-side.vercel.app/booking-delete/${_id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(() => {
                            const remaining = bookings.filter((booking) => booking._id !== _id)
                            setBookings(remaining)
                        })
                    const updateRoomInfo = { seat: 1 }
                    fetch(`https://stay-nest-server-side.vercel.app/rooms-upadate-seat/${id}`, {
                        updateRoomInfo,
                        method: 'PATCH',
                        headers: { 'content-type': 'application/json' },
                        body: JSON.stringify(updateRoomInfo)
                    })
                        .then(res => res.json())
                        .then(() => {
                        })
                }
            });
        }

        else {
            Swal.fire({
                position: "top-center",
                icon: "error",
                title: "Your booked room cancelation time is over",
                text: "Your can cancel booking before one day",
                showConfirmButton: false,
                timer: 1500
            });

        }
    };


  



    return (
        <div className="min-h-[100vh] pt-20 dark:bg-black dark:text-slate-100 ">
            <Tittle title='stay-nest/my-bookings' />
            <div className="text-center">
                <h3 className="text-2xl font-semibold">{moment().format('MMMM Do YYYY, h:mm:ss a')}</h3>
                <h3 className="text-xl font-semibold">My Bookings :{bookings.length}</h3>
            </div>

            <div>
                <div className="overflow-x-auto">
                    <table className="table  dark:bg-black ">
                        {/* head */}
                        <thead>
                            <tr className=" dark:text-white">
                                <th>
                                    <label>
                                        <span>Delete</span>
                                    </label>
                                </th>
                                <th>Name</th>
                                <th>Room Size</th>
                                <th>Booked seats</th>
                                <th>price per night</th>
                                <th>date</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookings.map((booking, index) => <tr key={index}>
                                    <th>
                                        <label>
                                            <span onClick={() => handleDelete(booking._id, booking.id,booking.date_in_)} className="btn dark:bg-slate-700 dark:text-white dark:border-0">X</span>
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={booking.image} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{booking.title}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>

                                        <span className="  dark:text-white dark:bg-black">{booking?.roomSize}</span>
                                    </td>
                                    <td>1</td>

                                    <td>${booking?.price}</td>
                                    <td>{booking?.date_in_}</td>

                                    <th>
                                        <Link to={`/update-date/${booking._id}`}>
                                            <button className="btn btn-ghost btn-xs bg-slate-50 dark:bg-slate-700">Update Date</button>
                                        </Link>
                                    </th>
                                    <th>
                                        <Link to={`/user-comment/${booking.id}`}><button className="btn btn-ghost btn-xs bg-slate-50 dark:bg-slate-700">Add Review</button></Link>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyBookings;