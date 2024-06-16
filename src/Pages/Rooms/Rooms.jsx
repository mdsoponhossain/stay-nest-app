import { Link, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { RxDoubleArrowRight, RxDoubleArrowLeft } from 'react-icons/rx';
import Tittle from "../../SharedComponent/Tittle";
import { IoIosArrowForward } from "react-icons/io";
import Room from "./Room";

const Rooms = () => {
    const { totalRoom } = useLoaderData();
    // console.log(totalRoom)
    const [sort, setSort] = useState(null);
    const [rooms, setRooms] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(9);
    useEffect(() => {
        fetch(`https://stay-nest-server-side.vercel.app/rooms?sortField=price&sortOrder=${sort}&currentPage=${currentPage}&itemsPerPage=${itemsPerPage}`)
            .then(res => res.json())
            .then(data => {
                setRooms(data)
            })
    }, [sort, currentPage, itemsPerPage]);

  

    const handleSorting = (e) => {
        console.log(e.target.value)
        setSort(e.target.value)
    }



    const totalPage = Math.ceil(totalRoom / itemsPerPage)
    // console.log('page number is:', totalPage)

    const pages = [...Array(totalPage).keys()]
    // console.log(pages);

    const currentPageHandle = (number) => {
        console.log(number)
        setCurrentPage(number)
    }

    const nextBtnHandle = () => {
        if (currentPage < totalPage - 1) {
            setCurrentPage(currentPage + 1)
        }
    }
    const previousBtnHandle = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }




    return (
        <section>
            {/* banner section */}
            <div className="hero h-[300px]  mb-16 md:mb-0 relative dark:bg-black " style={{ backgroundImage: 'url(https://cf.bstatic.com/xdata/images/hotel/max1024x768/437375235.jpg?k=8ee74cdd790c4d99cc1617526767d5dc758cfc05088a3e618e3019d177a5e17a&o=&hp=1)' }}>
                <div className="hero-overlay bg-black bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content absolute top-10 md:top-20 ">
                    <div className="max-w-5xl ">
                        <h3 className=' text-2xl md:text-4xl lg:text-5xl font-serif font-bold my-3' >Welcome to StayNest Hotel</h3>
                        <span className="text-white flex gap-3 justify-center items-center"><Link to='/'>Home</Link> <span><IoIosArrowForward></IoIosArrowForward></span> <Link to='/rooms'>Rooms</Link></span>
                    </div>
                </div>

                <div className="h-20 absolute max-w-4xl shadow-lg -bottom-10 bg-white w-[95%] md:w-[70%] lg:w-[60%] mx-auto text-black   flex justify-center items-center">
                    <label htmlFor="sortValue" className="button-primary py-2 px-3">Sort By  Price</label>
                    <select onChange={handleSorting} id="sortValue" className=" h-10  border border-black " >
                        <option value="1">Cheap Rooms First</option>
                        <option value="-1">Expensive Rooms First</option>
                    </select>
                </div>

            </div>

            {/* container of rooms */}
            <div className="dark:bg-black dark:text-slate-300 mt-24">
                <div className="  max-w-7xl mx-auto">
                    <Tittle title='stay-nest/rooms' />

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 ">
                        {
                            rooms.map((room, index) => <Room room={room} key={index}></Room>)
                        }
                    </div>

                    <div className="text-center py-10">
                        <button onClick={previousBtnHandle} className="btn bg-gray-200 mx-1 lg:mx-4"><RxDoubleArrowLeft></RxDoubleArrowLeft></button>
                        {
                            pages.map(page => <button onClick={() => currentPageHandle(page)} key={page} className={currentPage === page ? "btn bg-[#0cc4b0] text-white lg:mx-4 hover:bg-[#09ad9b]" : "btn bg-gray-200 mx-1 lg:mx-4"}>{page + 1}</button>)
                        }
                        <button onClick={nextBtnHandle} className="btn bg-gray-200 mx-1 lg:mx-4"><RxDoubleArrowRight></RxDoubleArrowRight></button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Rooms;