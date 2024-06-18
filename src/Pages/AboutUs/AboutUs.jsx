import { Link } from "react-router-dom";
import Tittle from "../../SharedComponent/Tittle";
import { IoIosArrowForward } from "react-icons/io";
import CountUp from 'react-countup';
import OurStandard from "./OurStandard";
import Footer from "../Home/Footer";


const AboutUs = () => {

    const counterContainers = {
        height: '150px',
        width: '150px',
        border: '2px solid white',
        'borderRadius': '75px',
        'textAlign': 'center',
        display: 'grid',
        'justifyItems': 'center',
        'alignItems': 'center',
        'backgroundColor': '#6aa59d',
        opacity: .8
    }

    return (
        <div className=" dark:bg-black dark:text-slate-300 ">
            <Tittle title='stay-nest/about-us' />

            {/* banner section */}
            <div className="hero h-[300px]  mb-16 md:mb-0 relative dark:bg-black " style={{ backgroundImage: 'url(https://i.ibb.co/m52hTyW/hotel-1.jpg)' }}>
                <div className="hero-overlay bg-black bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content absolute top-10 md:top-20 ">
                    <div className="max-w-5xl ">
                        <h3 className=' text-2xl md:text-4xl lg:text-5xl font-serif font-bold my-3' >Gallery</h3>
                        <span className="text-white flex gap-3 justify-center items-center"><Link to='/'>Home</Link> <span><IoIosArrowForward></IoIosArrowForward></span> <Link to='/about-us'>About Us</Link></span>
                    </div>
                </div>
            </div>


            <div className="text-justify lg:text-center lg:w-2/5 mx-auto p-2 my-10">
                <h3 className="text-4xl font-bold text-center">Since 1992</h3>
                <p className="text-md my-3">At StayNest, we have a rich history and a deep-rooted commitment to hospitality. Established in [Year], our hotel has been a cherished destination for travelers seeking a blend of comfort and elegance. Over the years, we have perfected the art of delivering exceptional service and creating an inviting atmosphere for our guests.</p>
            </div>

            {/* banner section */}
            <div className="hero  h-fit md:h-[500px] py-10 md:py-0  mb-16 md:mb-0 relative dark:bg-black " style={{ backgroundImage: 'url(https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/09/25/870587-hotel-room-092519.jpg)' }}>
                <div className="hero-overlay bg-white bg-opacity-10"></div>

                <div className="max-w-5xl grid justify-center text-white  lg:items-center md:grid-cols-2 lg:grid-cols-4  gap-5 ">
                    <div style={counterContainers} >

                        <div className=" w-fit h-fit ">
                            <h3 className="text-5xl font-bold text-white">
                                <CountUp end={30} duration={4} />
                            </h3>
                            <p className="text-2xl font-semibold">Rooms</p>
                        </div>
                    </div>
                    <div style={counterContainers}>
                        <div className=" w-fit h-fit ">
                            <h3 className="text-5xl font-bold text-white"><CountUp end={70} duration={4} /></h3>
                            <p className="text-2xl font-semibold">Staffs</p>
                        </div>
                    </div>
                    <div style={counterContainers}>
                        <div className=" w-fit h-fit ">
                            <h3 className="text-5xl font-bold text-white"><CountUp end={2} duration={5} /></h3>
                            <p className="text-2xl font-semibold">Resturant</p>
                        </div>
                    </div>
                    <div style={counterContainers}>
                        <div className=" w-fit h-fit ">
                            <h3 className="text-5xl font-bold text-white"><CountUp end={4} duration={5} /></h3>
                            <p className="text-2xl font-semibold">Pools</p>
                        </div>
                    </div>


                </div>

            </div>
            {/* our standard section... */}
            <OurStandard></OurStandard>
            <Footer></Footer>

        </div>
    );
};

export default AboutUs;