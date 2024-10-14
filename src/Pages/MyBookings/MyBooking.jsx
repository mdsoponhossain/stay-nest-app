import { useEffect, useState } from "react";


const MyBooking = ({booking}) => {
    // console.log(booking);
    const {price ,image ,title,roomSize,bed,_id} = booking ;
    const [deleteId , setDeleteId] = useState();
    const [bookInfo, setBookInfo] = useState([]);
    console.log(1111,_id)

    useEffect(()=>{
        fetch(`https://hotel-management-app-server.vercel.app/booking-delete/${deleteId}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    },[deleteId])

    return (
        <tr>
            <th>
                <label>
                    <span onClick={()=>setDeleteId(_id)} className="btn">X</span>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{title}</div>
                        {/* <div className="text-sm opacity-50">United States</div> */}
                    </div>
                </div>
            </td>
            <td>
                {/* Zemlak, Daniel and Leannon */}
                <br />
                <span className="badge badge-ghost badge-sm">{roomSize}</span>
            </td>
            <td>{bed}</td>
            <td>${price}</td>
            <th>
                <button className="btn btn-ghost btn-xs">confirm</button>
            </th>
        </tr>
    );
};

export default MyBooking;