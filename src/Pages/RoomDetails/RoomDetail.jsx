import { useContext} from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { FaStar } from 'react-icons/fa'
import { IoIosArrowForward } from "react-icons/io";
import { useForm } from "react-hook-form"


const RoomDetail = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
    } = useForm();

    //booking function
    const onSubmit = (data) => {
        setUpdateRoom(_id);
        data.id = _id;
        data.booking_person = person;
        data.booking_time = convertUTCtoLocal(new Date());
        data.seat = seat
        const userBookingInfo = { ...data, price, title, roomSize, bookStatus: 'booked', room_number, image };
        const updateRoomInfo = { seat: 1 };
        fetch('https://stay-nest-server-side.vercel.app/my-bookings',{
            method: 'POST',
            credentials:'include',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(userBookingInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.insertedId) {

                    fetch(`https://stay-nest-server-side.vercel.app/rooms-update/${_id}`,{
                        method: 'PATCH',
                        credentials: 'include',
                        headers: { 'content-type': 'application/json' },
                        body: JSON.stringify(updateRoomInfo)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data?.modifiedCount > 0) {
                                Swal.fire({
                                    position: "top-center",
                                    icon: "success",
                                    title: "Your room has been booked",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                navigate('/my-Bookings')

                            } else {
                                Swal.fire({
                                    icon: "error",
                                    title: "Oops...",
                                    text: "Something went wrong!",
                                });
                            }

                        })
                }
            })



    }

    const { image, balcony, seat, price, title, description, wifi, room_number, roomSize, _id, reviews } = useLoaderData();
    const { user, setUpdateRoom } = useContext(AuthContext)
    const person = user?.email;

    // date converting function
    function convertUTCtoLocal(utcDateString) {
        const utcTime = new Date(utcDateString);
        const localTime = utcTime.toLocaleString();
        return localTime;
    }

    const handleRegister = (e) => {
        e.preventDefault();
        const arrival = e.target.arrival.value;
        const departure = e.target.departure.value;
        const adults = e.target.adults.value;
        const childrens = e.target.children.value;
        const registationInfo = {
            arrival, departure, adults, childrens, user: user?.email, id: _id,
            image, balcony, seat, price, title,roomSize
        }
        fetch('https://stay-nest-server-side.vercel.app/room-regitering',{
            method: 'POST',
            credentials:'include',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(registationInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.insertedId && data?.acknowledged) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Your room registation done",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/my-registations')
                } else {
                    Swal.fire({
                        position: "top-center",
                        icon: "error",
                        title: "Your booked room registation failed",
                        text: "Try again later...",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }


    return (
        <section className="dark:bg-black">
            {/* banner section */}
            <div className="hero h-[50vh]  relative dark:bg-black " style={{ backgroundImage: 'url(https://cf.bstatic.com/xdata/images/hotel/max1024x768/168219422.jpg?k=f9c362f82ac119dd98e4723727e524d18f1af22c3c65fde44c455f961ffaf58d&o=&hp=1)' }}>
                <div className="hero-overlay bg-black bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content absolute  ">
                    <div className="max-w-5xl ">
                        <h3 className=' text-2xl md:text-4xl lg:text-5xl font-serif font-bold my-3' >Welcome to StayNest Hotel</h3>
                        <span className="text-white flex gap-3 justify-center items-center"><Link to='/'>Home</Link> <span><IoIosArrowForward></IoIosArrowForward></span> <Link to='/rooms'>Rooms</Link> <span><IoIosArrowForward></IoIosArrowForward></span> <span>{title}</span> </span>
                    </div>
                </div>


                    <Link className="absolute bottom-[5vh] border mt-4 md:mt-10 border-white py-2 px-3 md:py-3 md:px-6 font-semibold md:font-bold text-white hover:bg-white hover:text-[#079988]" to={-1}>GO BACK</Link>

            </div>

            {/* room details section */}
            <div className=" mt-20  dark:mt-0 dark:pt-0  px-1   dark:text-white w-full max-w-7xl h-2/6  mx-auto md:flex justify-between gap-7">
                <div className="w-full py-5 md:w-[75%] bg-base-100  dark:bg-black dark:text-white ">
                    <div className="flex justify-between my-5 items-center">
                        <h1 className="md:text-3xl font-bold">{title}</h1>
                        <div className="flex justify-between items-center w-[60%] md:w-[40%]">
                            {/* modal section */}
                            {/* The button to open modal */}
                            {seat ?
                                <label htmlFor="my_modal_7" className="button-primary  py-2 px-5 mx-3 md:px-10">
                                    Book
                                </label> :


                                <input className="bg-slate-300 text-slate-100  py-2 px-1 mx-3 md:px-10" type="submit" value=" Book" disabled />
                            }


                            {/* Put this part before </body> tag */}
                            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                            <div className="modal " role="dialog">
                                <div className="modal-box md:p-10">
                                    <h3 className="text-3xl dark:black mb-5 md:mb-8 font-bold text-center ">Booking Room Email</h3>

                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="grid grid-cols-2 gap-3">
                                            <div>
                                                <input className="border pl-1 md:pl-3 h-12 mb-3 md:mb-8  border-black w-full" type="text" placeholder="Your Name" {...register("name", { required: true })} />
                                            </div>

                                            <div>
                                                <input className="border pl-1 md:pl-3 h-12 mb-3 md:mb-8  border-black w-full" type="text" placeholder="Phone Number" {...register("phone", { required: true })} />
                                            </div>

                                            <div>
                                                <input className="border pl-1 md:pl-3 h-12 mb-3 md:mb-8  border-black w-full" type="email" placeholder="Email" {...register("email", { required: true })} />
                                            </div>

                                            <div>
                                                <input className="border pl-1 md:pl-3 h-12 mb-2 md:mb-6  border-black w-full" type="text" placeholder="Address" {...register("address", { required: true })} />
                                            </div>
                                            <div>
                                                <span>From</span>
                                                <input className="border pl-1 md:pl-3 h-12 mb-3 md:mb-6  border-black w-full" type="date" placeholder="Date In" {...register("date_in_", { required: true })} />
                                            </div>
                                            <div>
                                                <span>To</span>
                                                <input className="border pl-1 md:pl-3 h-12 mb-3 md:mb-8  border-black w-full" type="date" placeholder="Date Out" {...register("date_out_", { required: true })} />
                                            </div>
                                            <div>
                                                <input className="border pl-1 md:pl-3 h-12 mb-3 md:mb-8  border-black w-full" type="number" placeholder="Adults" {...register("adults", { required: true })} />
                                            </div>
                                            <div>
                                                <input className="border pl-1 md:pl-3 h-12 mb-3 md:mb-8  border-black w-full" type="number" placeholder="Childrens" {...register("childrens", { required: true })} />
                                            </div>
                                        </div>
                                        <textarea className="w-full mb-8 pl-3 border border-black" name="" placeholder="Notes" {...register("notes", { required: true })} cols="30" rows='6'></textarea>
                                        {/* <div className="text-center button-primary py-2">
                                            <span className="text-center  ">Submit Reservation</span>
                                        </div> */}


                                        <input className="text-center button-primary py-2 w-full" type="submit" value="Reservation" />



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
                        <div className="text-xl font-bold"> {reviews.length > 0 && <div className="flex items-center">Reviews: {reviews.length}<FaStar className="text-red-500"> </FaStar> </div>}</div>
                        <p className="my-5"> {description}</p>

                    </div>
                </div>

                {/* right side contents */}
                <div className=" w-full dark:bg-black md:w-[25%] p-2 md:mt-[14vh] lg:mt-[12vh] relative">


                    <section>
                        <form onSubmit={handleRegister} className="border dark:bg-slate-700 dark:text-white border-black p-5">
                            <h1 className="text-center font-bold mb-7 text-2xl">Your Reservation</h1>
                            <div>
                                <label htmlFor="arrival-date" className="font-bold">Arrival Date</label>
                                <input required className="dark:bg-slate-500 border border-black h-10 w-full mt-3 mb-5" type="date" name="arrival" />
                            </div>

                            <div>
                                <label htmlFor="departure-date" className="font-bold">Departure Date</label>
                                <input required className="border dark:bg-slate-500 border-black h-10 w-full mt-3 mb-5" type="date" name="departure" />
                            </div>

                            <div>
                                <label htmlFor="adults" className="font-bold">Adults</label>
                                <input required className="border dark:bg-slate-500 border-black h-10 w-full mt-3 mb-5" type="number" name="adults" placeholder="Enter adults number" />
                            </div>

                            <div>
                                <label htmlFor="children" className="font-bold">Chlidren</label>
                                <input required className="border dark:bg-slate-500 border-black h-10 w-full mt-3 mb-5" type="number" name="children" placeholder="Enter childrens number" />
                            </div>
                            <input className="button-primary btn rounded-none w-full mt-3 font-bold text-lg px-2 py-2 text-center" type="submit" value="Register" />
                        </form>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default RoomDetail;