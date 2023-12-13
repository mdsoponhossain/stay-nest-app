import { Link } from "react-router-dom";



const Banner = () => {
    return (
        <div className="hero h-[500px] dark:bg-black " style={{ backgroundImage: 'url(https://i.ibb.co/m52hTyW/hotel-1.jpg)' }}>
            <div className="hero-overlay bg-black bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-5xl ">
                    <h3 className='text-4xl font-serif font-bold my-3' >StayNest.com</h3>
                    <p className='text-md my-3 font-serif font-semibold'  >Your Simplified Hotel Booking Solution. Find, compare,<br /> and secure the ideal accommodations for your travel needs.<br /> Experience convenience, comfort, and worry-free bookings <br /> with us, so you can focus on what truly matters - your journey."</p>
                    <Link to='/rooms'><button className="btn  text-white bg-[#0cc4b0] hover:bg-[#09ad9b] border-none my-4"  >Get Started</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;

<div className="carousel w-full h-[600px]">
    <div id="slide1" className="carousel-item relative w-full bg-white">
        <img src="" className="w-full" />


        <div className="absolute  transform -translate-y-1/2 left-5 right-5 top-1/2 bg-gradient-to-r from-[#817c7c] to-[rgba(21, 21, 21, 0.00)] h-full left-0 grid items-center ">
            <div className='text-center'>

            </div>


        </div>
    </div>



</div>