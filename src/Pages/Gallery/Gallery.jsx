import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom";
import GalleryItem from "./GalleryItem";
import Tittle from "../../SharedComponent/Tittle";
import { IoIosArrowForward } from "react-icons/io";


const Gallery = () => {
    const galleries = useLoaderData();
    // console.log(galleries)
    return (
        <div className="dark:bg-black dark:text-slate-300 pb-3 ">
            <Tittle title='stay-nest/gallery' />

            {/* banner section */}
            <div className="hero h-[300px]  mb-16 md:mb-0 relative dark:bg-black " style={{ backgroundImage: 'url(https://i.ibb.co/m52hTyW/hotel-1.jpg)' }}>
                <div className="hero-overlay bg-black bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content absolute top-10 md:top-20 ">
                    <div className="max-w-5xl ">
                        <h3 className=' text-2xl md:text-4xl lg:text-5xl font-serif font-bold my-3' >Gallery</h3>
                        <span className="text-white flex gap-3 justify-center items-center"><Link to='/'>Home</Link> <span><IoIosArrowForward></IoIosArrowForward></span> <Link to='/gallery'>Gallery</Link></span>
                    </div>
                </div>
            </div>

            {/* navigation items for galleries.. */}



            <div className=" w-full max-w-7xl mx-auto ">


                <div className="h-20 grid items-center w-2/5 font-bold mx-auto">
                    <ul className="flex justify-around text-xl">
                        <li><NavLink to='/gallery'>All</NavLink></li>
                        <li><NavLink to='/gallery/rooms' >Rooms</NavLink></li>
                        <li><NavLink to='/gallery/resturant' >Restaurant</NavLink></li>
                        <li><NavLink to='/gallery/others' >Others</NavLink></li>
                    </ul>
                </div>


                <div>
                    <Outlet></Outlet>
                </div>


                <div className="  grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        galleries.map(galleryItem => <GalleryItem key={galleryItem._id} galleryItem={galleryItem}></GalleryItem>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Gallery;