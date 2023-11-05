import { Link } from "react-router-dom";


const Room = ({ room }) => {
    console.log(room)
    const { image, title, price, room_number, _id } = room;

    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img className="h-64 w-full" src={image} alt={room_number} /></figure>
            <div className="card-body">
                <h2 className="card-title text-gray-700 ">{title}</h2>

                <p className="text-gray-700 font-semibold">Price:$ {price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/RoomDetails/${_id}`}>
                        <button className="btn  text-white bg-[#0cc4b0] hover:bg-[#09ad9b]">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Room;