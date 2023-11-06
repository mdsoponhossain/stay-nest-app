import { useLoaderData } from "react-router-dom";
import Room from "./Room";
import { useEffect, useState } from "react";


// http://localhost:5000/rooms?sortField=price&sortOrder=${asc}
const Rooms = () => {
    // const Rooms = useLoaderData()
    const [sort ,setSort] = useState();
    const [rooms, setRooms] = useState([]);
     console.log(Rooms)
    useEffect(()=>{
        fetch(`http://localhost:5000/rooms?sortField=price&sortOrder=${sort}`)
        .then(res=>res.json())
        .then(data=>{
            setRooms(data)
        })
    },[sort])
    const handleSorting =(e)=>{
        console.log(e.target.value)
        setSort(e.target.value)
    }
   
    return (
        <div>
            <div className="h-10 w-full">
                <select onChange={handleSorting} className="bg-[#0cc4b0] text-white" >
                    <option value="1">Asending sort by price</option>
                    <option value="-1">desending sort by price</option>
                </select>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    rooms.map((room, index) => <Room room={room} key={index}></Room>)
                }
            </div>

        </div>
    );
};

export default Rooms;