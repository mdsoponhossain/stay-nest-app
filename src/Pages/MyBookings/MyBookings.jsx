import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyBooking from "./MyBooking";


const MyBookings = () => {
    const {user} = useContext(AuthContext);
    const [bookings ,setBookings] = useState([])
    const userEmail = user.email;
    // console.log(userEmail)
    useEffect(()=>{
        fetch(`http://localhost:5000/my-bookings/${userEmail}`)
        .then(res=>res.json())
        .then(data=>{
            // console.log(data)
            setBookings(data)
        })
    },[userEmail])

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
                                        <input type="checkbox" className="checkbox" />
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
                            {
                                bookings.map((booking,index)=><MyBooking booking={booking} key={index}></MyBooking>)
                            }
                           
                           
                           
                            
                        </tbody>
                        
                       

                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyBookings;