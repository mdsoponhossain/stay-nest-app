import { useLoaderData } from "react-router-dom";
import Room from "./Room";
import { useEffect, useState } from "react";
import { RxDoubleArrowRight,RxDoubleArrowLeft } from 'react-icons/rx';
import Tittle from "../../SharedComponent/Tittle";


const Rooms = () => {
    const { totalRoom } = useLoaderData();
    console.log(totalRoom)
    const [sort, setSort] = useState();
    const [rooms, setRooms] = useState([]);
    const [currentPage ,setCurrentPage] = useState(0);
    const [itemsPerPage ,setItemsPerPage] = useState(10);
    console.log(Rooms)
    useEffect(() => {
        fetch(`https://stay-nest-server.vercel.app/rooms?sortField=price&sortOrder=${sort}&currentPage=${currentPage}&itemsPerPage=${itemsPerPage}`)
            .then(res => res.json())
            .then(data => {
                setRooms(data)
            })
    }, [sort,currentPage,itemsPerPage])
    const handleSorting = (e) => {
        console.log(e.target.value)
        setSort(e.target.value)
    }

    
   
    const totalPage = Math.ceil(totalRoom / itemsPerPage)
    console.log('page number is:', totalPage)

    const pages = [...Array(totalPage).keys()]
    console.log(pages);

    const currentPageHandle =(number)=>{
        console.log(number)
        setCurrentPage(number)
    }

    const nextBtnHandle =()=>{
        if(currentPage < totalPage -1){
            setCurrentPage(currentPage +1)
        }
    }
    const previousBtnHandle =()=>{
        if(currentPage > 0){
            setCurrentPage(currentPage -1)
        }
    }




    return (
        <div>
            <Tittle title='stay-nest/rooms'/>
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

            <div className="text-center my-10">
                <button onClick={previousBtnHandle} className="btn bg-gray-200 mx-1 lg:mx-4"><RxDoubleArrowLeft></RxDoubleArrowLeft></button>
                {
                    pages.map(page => <button onClick={()=>currentPageHandle(page)} key={page} className={ currentPage === page ? "btn bg-[#0cc4b0] text-white lg:mx-4 hover:bg-[#09ad9b]" : "btn bg-gray-200 mx-1 lg:mx-4"}>{page + 1}</button>)
                }
                <button onClick={nextBtnHandle} className="btn bg-gray-200 mx-1 lg:mx-4"><RxDoubleArrowRight></RxDoubleArrowRight></button>
            </div>

        </div>
    );
};

export default Rooms;