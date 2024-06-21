import Aos from "aos";
import { useEffect } from "react";
import { Link } from "react-router-dom";


const SpecialOffer = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div data-aos="fade-up"
        data-aos-duration="3000"  className="md:mb-10 lg:block dark:bg-black bg-white h-auto grid items-center pt-2 ">
            <h3 className="text-4xl  text-center text-gray-600 my-10 dark:text-white  font-bold">Special Offers</h3>

            <div className="hero-content gap-0   w-full bg-white dark:bg-slate-700  flex-col  lg:flex-row md:w-full mx-auto">
                <div className=" h-56">
                    <img className="h-full w-full  " src="https://i.ibb.co/3vBXvgg/hotel-2.jpg" />
                </div>
                <div className=" w-full h-full md:w-full text-gray-600 bg-white dark:bg-slate-700 dark:text-white">
                    <h1 className="text-3xl font-bold">Luxury Room</h1>
                    <p className="font-semibold">Start From $249</p>

                    <p className="py-2 font-semibold">Book your stay on our hotel booking website and enjoy a <span className="text-2xl">5%</span> discount when you make your reservation online. Don't miss this opportunity to save on your next getaway!</p>
                    <Link to='/rooms'><button className="btn text-white bg-[#0cc4b0] hover:bg-[#09ad9b]">Book Now</button></Link>
                </div>
            </div>


            <div className="hero-content dark:bg-slate-700  gap-0  w-full bg-white  flex-col-reverse  lg:flex-row md:w-full mx-auto">

                <div className=" mb-3 md:mb-0 w-full h-full    text-gray-600 bg-white dark:bg-slate-700 dark:text-white">
                    <h1 className="text-3xl font-bold">  Family Suit</h1>
                    <p className="font-semibold"> Start From $279</p>
                    <p className="py-2 font-semibold"> Our Family Fun Getaway Package is designed to make your family's stay both memorable and affordable.Enjoy your <span className="text-2xl">10%</span> discount on the total booking amount.</p>
                    <Link to='/rooms'><button className="btn text-white bg-[#0cc4b0] hover:bg-[#09ad9b]">Book Now</button></Link>
                </div>
                <div className="h-56">
                    <img className="h-full" src="https://i.ibb.co/d7ChPFF/hotel-3.jpg" />
                </div>
            </div>







        </div>
    );
};

export default SpecialOffer;