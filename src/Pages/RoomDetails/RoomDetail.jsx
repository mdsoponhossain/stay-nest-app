import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { FaStar } from 'react-icons/fa'
import { IoIosArrowForward } from "react-icons/io";



const RoomDetail = () => {
    const { image, balcony, seat, price, title, description, wifi, room_number, roomSize, _id, reviews } = useLoaderData();
    const { user, setUpdateRoom } = useContext(AuthContext)
    const person = user?.email;
    const [date, setDate] = useState();
    console.log(image,balcony,seat,'....')

    const handleDate = (e) => {
        const date = e.target.value;
        console.log(date)
        setDate(date)
    }
    // date converting function
    function convertUTCtoLocal(utcDateString) {
        const utcTime = new Date(utcDateString);
        const localTime = utcTime.toLocaleString();
        return localTime;
    }
   
    const HandleBooking = (id) => {
        setUpdateRoom(id)
        const userBookingInfo = { image, id: _id, price, title, roomSize, bookStatus: 'booked', description, person, seat, room_number, date:convertUTCtoLocal(new Date()) };



        const updateRoomInfo = { seat: 1 }
        console.log({ userBookingInfo });

        Swal.fire({
            title: 'Are you sure to book this room ?',
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#079988",
            cancelButtonColor: "#d33",
            confirmButtonText: "Comfirm"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch('https://stay-nest-server-side.vercel.app/room-booking',{
                    method: 'POST',
                    withCredentials: true,
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(userBookingInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data,'sopon')
                        if (data.insertedId) {
                            Swal.fire({
                                title: "Good job!",
                                text: "You room is booked successfully",
                                icon: "success"
                            });
                            setTimeout(location.reload(true), 10000)
                        }
                    })

                fetch(`https://stay-nest-server-side.vercel.app/rooms-upadate/${id}`, {
                    updateRoomInfo,
                    method: 'PATCH',
                    withCredentials: true,
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(updateRoomInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data,);

                    })


            }
        });

    }


    return (
        <section>
            {/* banner section */}
            <div className="hero h-[300px]  mb-16 md:mb-0 relative dark:bg-black " style={{ backgroundImage: 'url(https://cf.bstatic.com/xdata/images/hotel/max1024x768/168219422.jpg?k=f9c362f82ac119dd98e4723727e524d18f1af22c3c65fde44c455f961ffaf58d&o=&hp=1)' }}>
                <div className="hero-overlay bg-black bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content absolute top-10 md:top-20 ">
                    <div className="max-w-5xl ">
                        <h3 className=' text-2xl md:text-4xl lg:text-5xl font-serif font-bold my-3' >Welcome to StayNest Hotel</h3>
                        <span className="text-white flex gap-3 justify-center items-center"><Link to='/'>Home</Link> <span><IoIosArrowForward></IoIosArrowForward></span> <Link to='/rooms'>Rooms</Link> <span><IoIosArrowForward></IoIosArrowForward></span> <span>{title}</span> </span>
                    </div>
                </div>


                <button className="absolute bottom-10 border mt-4 md:mt-10 border-white py-2 px-3 md:py-3 md:px-6 font-semibold md:font-bold text-white hover:bg-white hover:text-[#079988]">
                    <Link to={-1}>GO BACK</Link>
                </button>

            </div>

            {/* room details section */}
            <div className=" mt-20  w-full max-w-7xl h-2/6  mx-auto md:flex justify-between gap-7">
                <div className="w-full md:w-[75%] bg-base-100   dark:bg-black dark:text-slate-300  ">
                    <div className="flex justify-between my-5 items-center">
                        <h1 className="md:text-3xl font-bold">{title}</h1>
                        <div className="flex  justify-between items-center w-[60%] md:w-[40%]">
                            {/* modal section */}
                            {/* The button to open modal */}
                            <label htmlFor="my_modal_7" className="button-primary  py-2 px-2 md:px-10">Register</label>

                            {/* Put this part before </body> tag */}
                            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                            <div className="modal" role="dialog">
                                <div className="modal-box md:p-10">
                                    <h3 className="text-3xl mb-5 md:mb-8 font-bold text-center">Booking Room Email</h3>
                                    <form>
                                        <section className="grid grid-cols-2 gap-3">
                                            <div>
                                                <input className="border pl-1 md:pl-3 h-12 mb-3 md:mb-8  border-black w-full" type="text" placeholder="Your Full Name" name="" id="" />
                                            </div>

                                            <div>
                                                <input className="border pl-1 md:pl-3 h-12 mb-3 md:mb-8  border-black w-full" type="text" placeholder="Your Phone Number" name="" id="" />
                                            </div>

                                            <div>
                                                <input className="border pl-1 md:pl-3 h-12 mb-3 md:mb-8  border-black w-full" type="email" placeholder="Your Email" name="" id="" />
                                            </div>

                                            <div>
                                                <input className="border pl-1 md:pl-3 h-12 mb-3 md:mb-8  border-black w-full" type="text" placeholder="Your Address" name="" id="" />
                                            </div>
                                            <div>
                                                <input className="border pl-1 md:pl-3 h-12 mb-3 md:mb-8  border-black w-full" type="date" placeholder="Date in*" name="" id="" />
                                            </div>
                                            <div>
                                                <input className="border pl-1 md:pl-3 h-12 mb-3 md:mb-8  border-black w-full" type="date" placeholder="Date out*" name="" id="" />
                                            </div>
                                            <div>
                                                <input className="border pl-1 md:pl-3 h-12 mb-3 md:mb-8  border-black w-full" type="number" placeholder=" Adults" name="" id="" />
                                            </div>
                                            <div>
                                                <input className="border pl-1 md:pl-3 h-12 mb-3 md:mb-8  border-black w-full" type="number" placeholder=" Childrens" name="" id="" />
                                            </div>
                                        </section>
                                        <textarea className="w-full mb-8 pl-3 border border-black" name="" placeholder="Note" id="" cols="30" rows='6'></textarea>
                                        <div className="text-center button-primary py-2">
                                            <span className="text-center  ">Submit Reservation</span>
                                        </div>
                                    </form>
                                </div>
                                <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
                            </div>


                            <p>Price : <span className="primary-color md:text-3xl font-semibold">${price}</span> <span className="font-bold">/ night</span></p>
                        </div>
                    </div>
                    <figure><img className="w-full" src={image} alt={room_number} /></figure>


                    <div className="mt-10">
                        <div className="w-full flex justify-between" >
                            <div>
                            </div>
                        </div>
                        <p className="font-bold">Price: ${price}</p>
                        <p className="font-bold">Total Seat: {seat ? <span>{seat}</span> : <span className="text-red-500 font-bold"> Unavailble</span>}</p>
                        <p className="font-bold">Room Size: {roomSize}</p>
                        <p className="font-bold">Availability: {seat ? 'Available' : <span className="text-red-500 font-bold"> Unavailble</span>}</p>

                        <p className="font-bold">Balcony Status: {balcony ? 'Ok' : 'False'}</p>
                        <p className="font-bold">WiFi Status: {wifi ? 'Ok' : 'False'}</p>
                        <p className="text-xl font-bold"> {reviews.length > 0 && <div className="flex items-center">Reviews: {reviews.length}<FaStar className="text-red-500"> </FaStar> </div>}</p>
                        <p className="my-5"> {description}</p>

                    </div>
                </div>

                {/* right side contents */}
                <div className=" w-full md:w-[25%] p-2 relative">

                    {seat ? <section onClick={() => HandleBooking(_id)} className=" md:mt-3 button-primary text-center h-10 grid justify-center items-center mb-10 ">

                        <p> Book This Room</p>

                    </section>
                        :
                        <button onClick={() => HandleBooking(_id)} disabled className="w-full rounded-none  btn button-primary text-center h-10 grid justify-center items-center mb-10 ">

                            <p> Book This Room</p>

                        </button>
                    }


                    <section>
                        <form className="border border-black p-5">
                            <h1 className="text-center font-bold mb-7 text-2xl">Your Reservation</h1>
                            <div>
                                <label htmlFor="arrival-date" className="font-bold">Arrival Date</label>
                                <input className="border border-black h-10 w-full mt-3 mb-5" type="date" id="arrival-date" />
                            </div>

                            <div>
                                <label htmlFor="departure-date" className="font-bold">Departure Date</label>
                                <input className="border border-black h-10 w-full mt-3 mb-5" type="date" id="departure-date" />
                            </div>

                            <div>
                                <label htmlFor="adults" className="font-bold">Adults</label>
                                <input className="border border-black h-10 w-full mt-3 mb-5" type="text" id="adults" />
                            </div>

                            <div>
                                <label htmlFor="children" className="font-bold">Chlidren</label>
                                <input className="border border-black h-10 w-full mt-3 mb-5" type="text" id="children" />
                            </div>



                            <div className="button-primary w-full mt-3 font-bold text-lg px-2 py-2 text-center">Check Availability</div>
                        </form>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default RoomDetail;