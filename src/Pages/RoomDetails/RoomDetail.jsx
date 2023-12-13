import { useContext, useState } from "react";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { FaStar } from 'react-icons/fa'



const RoomDetail = () => {
    const { image, balcony, seat, price, title, description, wifi, room_number, roomSize, availability, _id, reviews } = useLoaderData();
    const { user, setUpdateRoom } = useContext(AuthContext)
    const person = user.email;
    const [date ,setDate] = useState();

    const handleDate= (e)=>{
        const date = e.target.value ;
        console.log(date)
        setDate(date)
    }

    const HandleBooking = (id) => {
        setUpdateRoom(id)
        const userBookingInfo = { image, id: _id, price, title, roomSize, bookStatus: 'booked', description, person, seat, room_number,date };
       


        const updateRoomInfo = { seat: 1 }
        console.log({ userBookingInfo });

        Swal.fire({
            title: 'Are your sure to book?',

            html: `
            <img src=${image} />
            Tittle :  ${title},<br>
            Seat :  1,<br>
            price per night : $ ${price},<br>
            Room Size :  ${roomSize}
            
          `,

            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Comfirm"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch('https://stay-nest-server.vercel.app/room-booking', {
                    method: 'POST',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(userBookingInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.insertedId) {
                            Swal.fire({
                                title: "Good job!",
                                text: "You room is booked successfully",
                                icon: "success"
                            });
                            setTimeout(location.reload(true), 10000)
                        }
                    })

                fetch(`https://stay-nest-server.vercel.app/rooms-upadate/${id}`, {
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
        });







    }


    return (
        <div className="border-4 w-full h-2/6  mx-auto">
            <div className="card w-full bg-base-100 shadow-xl  dark:bg-black dark:text-slate-300  ">
                <figure><img className="w-full" src={image} alt={room_number} /></figure>


                <div className="card-body">
                    <h2 className="card-title text-4xl text-gray-600 font-bold">{title}</h2>
                    <div className="w-full flex justify-between" >
                        <div>
                        </div>
                        <div>
                            <label className="text-xl font-bold">Pick Your booking Date:</label><br/>
                            <input onChange={handleDate} className="h-14 w-60 border-4 font-bold" type="date" name="date" id="" required />
                        </div>
                    </div>
                    <p className="text-2xl text-gray-600 font-bold">Price:${price}</p>
                    <p className="text-2xl text-gray-600 font-bold">Total Seat:{seat ? <span>{seat}</span> : <span className="text-red-500 font-bold">Unavailble</span>  }</p>
                    <p className="text-2xl text-gray-600 font-bold">Room Size:{roomSize}</p>
                    <p className="text-2xl text-gray-600 font-bold">Availability:{seat ? 'Available' : <span className="text-red-500 font-bold">Unavailble</span>}</p>

                    <p className="text-2xl text-gray-600 font-bold">Balcony Status:{balcony ? 'Ok' : 'False'}</p>
                    <p className="text-2xl text-gray-600 font-bold">WiFi Status:{wifi ? 'Ok' : 'False'}</p>
                    <p className="text-xl  text-gray-600 font-bold">{reviews.length >0 && <div className="flex items-center">Reviews: {reviews.length}<FaStar className="text-red-500"> </FaStar> </div>}</p>
                    <p className="text-2xl  text-gray-600 font-bold">{description}</p>
                    <div className="card-actions justify-center">
                        <Link to={-1}><button className="btn  text-white btn-lg bg-[#0cc4b0] hover:bg-[#09ad9b]">Go Back</button></Link>
                        {
                            seat && <button onClick={() => HandleBooking(_id)} className="btn  text-white btn-lg bg-[#0cc4b0] hover:bg-[#09ad9b]">Book Now</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomDetail;