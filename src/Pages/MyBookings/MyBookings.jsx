import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
// import MyBooking from "./MyBooking";


const MyBookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const userEmail = user.email;
    // console.log(userEmail)
    useEffect(() => {
        fetch(`http://localhost:5000/my-bookings/${userEmail}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setBookings(data)
            })
    }, [userEmail]);


    const handleDelete = (id) => {
        console.log(3333, id);
        

        fetch(`http://localhost:5000/booking-delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = bookings.filter((booking) => booking._id !== id)
                setBookings(remaining)
            })

        //jjjjjjjjjjjjjj
        const updateRoomInfo = { availability: true }

        fetch(`http://localhost:5000/rooms-upadate/${id}`, {
            updateRoomInfo,
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updateRoomInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

            })



    }

    return (
        <div>
            <h3>This is my booking page</h3>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <span>Delete</span>
                                    </label>
                                </th>
                                <th>Name</th>
                                <th>Room Size</th>
                                <th>bed type</th>
                                <th>price per night</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* const {price ,image ,title,roomSize,bed,_id} = booking ; */}
                            {
                                bookings.map((booking, index) => <tr key={index}>
                                    <th>
                                        <label>
                                            <span onClick={() => handleDelete(booking._id)} className="btn">X</span>
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
                                                {/* <div className="text-sm opacity-50">United States</div> */}
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {/* Zemlak, Daniel and Leannon */}
                                        <br />
                                        <span className="badge badge-ghost badge-sm">{booking.roomSize}</span>
                                    </td>
                                    <td>{booking.bed}</td>

                                    <td>${booking.price}</td>

                                    <th>
                                        <button className="btn btn-ghost btn-xs">confirm</button>
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