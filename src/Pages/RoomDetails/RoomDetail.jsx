import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";



const RoomDetail = () => {
    const { image, balcony, bed, price, title, description, wifi, room_number, roomSize, availability, _id } = useLoaderData();
    const { user,setUpdateRoom } = useContext(AuthContext)
    const person = user.email;

    const HandleBooking = (id) => {
        setUpdateRoom(id)
        const userBookingInfo = { image, price, title, roomSize, bookInfo: 'booked', description, person, bed };
        const updateRoomInfo = {availability:false}
        console.log({ userBookingInfo })
        fetch('http://localhost:5000/room-booking', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(userBookingInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

        fetch(`http://localhost:5000/rooms-upadate/${id}`, {updateRoomInfo,
            method: 'PATCH',
            headers:{'content-type': 'application/json' },
            body:JSON.stringify(updateRoomInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
               
            })

    }


    return (
        <div className="border-4 w-full h-2/6  mx-auto">
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img className="w-full" src={image} alt={room_number} /></figure>

                <div className="card-body">
                    <h2 className="card-title text-4xl text-gray-600 font-bold">{title}</h2>
                    <p className="text-2xl text-gray-600 font-bold">Price:${price}</p>
                    <p className="text-2xl text-gray-600 font-bold">Bed:{bed}</p>
                    <p className="text-2xl text-gray-600 font-bold">Room Size:{roomSize}</p>
                    <p className="text-2xl text-gray-600 font-bold">Availability:{availability === true ? 'Available' : <span className="text-red-500 font-bold">Unavailble</span>}</p>

                    <p className="text-2xl text-gray-600 font-bold">Balcony Status:{balcony ? 'Ok' : 'False'}</p>
                    <p className="text-2xl text-gray-600 font-bold">WiFi Status:{wifi ? 'Ok' : 'False'}</p>
                    <p className="text-2xl text-gray-600 font-bold">{description}</p>
                    <div className="card-actions justify-center">
                        <Link to={-1}><button className="btn  text-white btn-lg bg-[#0cc4b0] hover:bg-[#09ad9b]">Go Back</button></Link>
                        {
                            availability === false ? '' : <button onClick={() => HandleBooking(_id)} className="btn  text-white btn-lg bg-[#0cc4b0] hover:bg-[#09ad9b]">Book Now</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomDetail;