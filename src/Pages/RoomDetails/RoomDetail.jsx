import { useLoaderData } from "react-router-dom";



const RoomDetail = () => {
    const { image, balcony, bed, price, title, description, wifi, room_number } = useLoaderData();



    return (
        <div className="border-4 w-full h-2/6  mx-auto">
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img className="w-full" src={image} alt={room_number} /></figure>

                <div className="card-body">
                    <h2 className="card-title text-4xl text-gray-600 font-bold">{title}</h2>
                    <p className="text-2xl text-gray-600 font-bold">Price:${price}</p>
                    <p className="text-2xl text-gray-600 font-bold">Bed:{bed}</p>
                    <p className="text-2xl text-gray-600 font-bold">Balcony Status:{balcony ? 'Ok' : 'False'}</p>
                    <p className="text-2xl text-gray-600 font-bold">WiFi Status:{wifi ? 'Ok' : 'False'}</p>
                    <p className="text-2xl text-gray-600 font-bold">{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn  text-white btn-lg bg-[#0cc4b0] hover:bg-[#09ad9b]">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomDetail;