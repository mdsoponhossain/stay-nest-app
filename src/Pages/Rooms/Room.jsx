
import { Link } from "react-router-dom";
import { FaWifi } from "react-icons/fa6";
import { ImSpoonKnife } from "react-icons/im";
import { TbGlass } from "react-icons/tb";
import { FaSwimmer } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";


const Room = ({ room }) => {
    // console.log(room)

    const { image, title, price, room_number, _id } = room;


    return (
        <>
            <div id="card" className="relative h-[550px] dark:bg-slate-700 dark:text-white  md:w-[370px] lg:w-96 bg-base-100 shadow-lg mt-5 ">
                <FaArrowRightLong className="arrow   absolute top-28 left-40 text-xl text-white z-30"></FaArrowRightLong>
                <Link to={`/RoomDetails/${_id}`}>
                    <div className="absolute bg-black w-full border-2 border-red-700 h-[250px] opacity-0 hover:opacity-30"></div>
                    <figure>
                        <img className='h-[250px] w-full ' src={image} alt="Shoes" />
                    </figure>
                </Link>
                <div className="p-3">
                    <h2 className="text-3xl font-bold ">{title}</h2>
                    <p className='my-6'>Make yourself comfortable in any of our serene guest rooms and spacious suites...</p>
                    <p className='flex gap-10 mt-4'>
                        <FaWifi></FaWifi>
                        <ImSpoonKnife></ImSpoonKnife>
                        <FaSwimmer></FaSwimmer>
                        <TbGlass></TbGlass>
                    </p>
                    <div className="border border-slate-300 my-8"></div>

                    <p className='text-xl font-semibold text-slate-500 dark:text-white'>Price : <span className='text-3xl  font-bold'>${price}</span> / night</p>
                </div>
            </div>
        </>
    );
};

export default Room;