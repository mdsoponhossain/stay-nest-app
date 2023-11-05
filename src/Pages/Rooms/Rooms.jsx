import { useLoaderData } from "react-router-dom";
import Room from "./Room";


const Rooms = () => {
    const Rooms = useLoaderData()
    console.log(Rooms)
    return (
        <div>
            <h3>this is the rooms page</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    Rooms.map((room,index)=><Room room={room} key={index}></Room>)
                }
            </div>
            
        </div>
    );
};

export default Rooms;