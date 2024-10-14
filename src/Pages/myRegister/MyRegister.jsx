import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Tittle from "../../SharedComponent/Tittle";
import moment from "moment";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const MyRegister = () => {
    const [registations, setRegistations] = useState([]);
    const { user } = useContext(AuthContext);
    const userEmail = user?.email;
    const axiosSecure = useAxiosSecure();


    useEffect(() => {
        axiosSecure.get(`/room-regitering/${userEmail}`)
            .then(res => {
                setRegistations(res?.data)
            })
    }, [userEmail, axiosSecure]);

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure to delete booking ?",

            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "confirm"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://hotel-management-app-server.vercel.app/registation-delete/${_id}`, {
                    method: 'DELETE',
                    credentials: 'include'
                })
                    .then(res => res.json())
                    .then((data) => {
                        if (data?.deletedCount) {
                            const remaining = registations.filter((booking) => booking._id !== _id)
                            setRegistations(remaining)
                        }

                    })


            }
        });
    };


    return (
        <div className="min-h-[100vh] pt-20 dark:bg-black dark:text-slate-100 ">
            <Tittle title='stay-nest/my-registations' />
            <div className="text-center">
                <h3 className="text-2xl font-semibold">{moment().format('MMMM Do YYYY, h:mm:ss a')}</h3>
                <h3 className="text-xl font-semibold">My Registations :{registations.length}</h3>
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
                                registations.map((booking, index) => <tr key={index}>
                                    <th>
                                        <label>
                                            <span onClick={() => handleDelete(booking?._id)} className="btn dark:bg-slate-700 dark:text-white dark:border-0">X</span>
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
                                    <td>{booking?.arrival}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyRegister;