// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaWifi } from "react-icons/fa6";
import { ImSpoonKnife } from "react-icons/im";
import { TbGlass } from "react-icons/tb";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { FaSwimmer } from "react-icons/fa";
// import hotelRooms from "./hotelRooms.css";
// import hotelRooms from "./hotelRooms.css?inline"


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect } from 'react';
import Aos from 'aos';
import ThreeSixtyImage from '../../SharedComponent/ThreeSixtyImage';
const HotelRooms = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div data-aos="zoom-in-up" data-aos-duration="2000" className="h-[700px] mt-[65vh] md:mt-[20vh] ">
            <h1 className=' text-2xl text-center md:text-4xl lg:text-5xl font-serif font-bold my-5'>Hotel Master Rooms</h1>
            <p className='text-center pb-10'>Contrary to popular belief</p>
            <section className='max-w-7xl mx-auto '>
                <Swiper
                    slidesPerView={1}
                    navigation={true}
                    spaceBetween={10}
                    modules={[Navigation]}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    className="mySwiper"
                >
                    {/* slide one */}
                    <SwiperSlide >
                        <div id='card' className=" dark:bg-slate-700 dark:text-white h-[550px] dark:border-0 border-b-2   md:w-[370px] lg:w-96 bg-base-100 shadow-xl ">
                            <ThreeSixtyImage height={'250px'} compass={false} image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX7KL3_FEYtylyHRVPJWksFryq7-U25jfTow&s"}></ThreeSixtyImage>
                            <div className="p-3">
                                <h2 className="text-3xl font-bold ">Family Room 3</h2>
                                <p className='my-6'>Make yourself comfortable in any of our serene guest rooms and spacious suites...</p>
                                <p className='flex gap-10 mt-4'>
                                    <FaWifi></FaWifi>
                                    <ImSpoonKnife></ImSpoonKnife>
                                    <FaSwimmer></FaSwimmer>
                                    <TbGlass></TbGlass>
                                </p>
                                <div className="my-8"></div>

                                <p className='text-xl font-semibold dark:text-white text-slate-500'>Price : <span className='text-3xl text-slate-800 dark:text-white font-bold'>$500</span> / night</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* slide two */}

                    <SwiperSlide >
                        <div id='card' className=" dark:bg-slate-700 dark:text-white h-[550px] dark:border-0 border-b-2   md:w-[370px] lg:w-96 bg-base-100 shadow-xl ">
                            <ThreeSixtyImage height={'250px'} compass={false} image={"https://t3.ftcdn.net/jpg/02/07/98/18/360_F_207981894_D4lGdWrSsYwdk8wSZfv3M56W5V4Z5ck8.jpg"}></ThreeSixtyImage>
                            <div className="p-3">
                                <h2 className="text-3xl font-bold ">Family Room 3</h2>
                                <p className='my-6'>Make yourself comfortable in any of our serene guest rooms and spacious suites...</p>
                                <p className='flex gap-10 mt-4'>
                                    <FaWifi></FaWifi>
                                    <ImSpoonKnife></ImSpoonKnife>
                                    <FaSwimmer></FaSwimmer>
                                    <TbGlass></TbGlass>
                                </p>
                                <div className="my-8"></div>

                                <p className='text-xl font-semibold dark:text-white text-slate-500'>Price : <span className='text-3xl text-slate-800 dark:text-white font-bold'>$500</span> / night</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide >
                        <div id='card' className=" dark:bg-slate-700 dark:text-white h-[550px] dark:border-0 border-b-2   md:w-[370px] lg:w-96 bg-base-100 shadow-xl ">
                            <ThreeSixtyImage height={'250px'} compass={false} image={"https://www.shutterstock.com/image-illustration/360-degrees-bedroom-3d-rendering-600nw-2286195827.jpg"}></ThreeSixtyImage>
                            <div className="p-3">
                                <h2 className="text-3xl font-bold ">Family Room 3</h2>
                                <p className='my-6'>Make yourself comfortable in any of our serene guest rooms and spacious suites...</p>
                                <p className='flex gap-10 mt-4'>
                                    <FaWifi></FaWifi>
                                    <ImSpoonKnife></ImSpoonKnife>
                                    <FaSwimmer></FaSwimmer>
                                    <TbGlass></TbGlass>
                                </p>
                                <div className="my-8"></div>

                                <p className='text-xl font-semibold dark:text-white text-slate-500'>Price : <span className='text-3xl text-slate-800 dark:text-white font-bold'>$500</span> / night</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide >
                        <div id='card' className=" dark:bg-slate-700 dark:text-white h-[550px] dark:border-0 border-b-2   md:w-[370px] lg:w-96 bg-base-100 shadow-xl ">
                            <ThreeSixtyImage height={'250px'} compass={false} image={"https://media-cdn.tripadvisor.com/media/photo-s/0d/ac/50/7b/360-degree-view-flattened.jpg"}></ThreeSixtyImage>
                            <div className="p-3">
                                <h2 className="text-3xl font-bold ">Family Room 3</h2>
                                <p className='my-6'>Make yourself comfortable in any of our serene guest rooms and spacious suites...</p>
                                <p className='flex gap-10 mt-4'>
                                    <FaWifi></FaWifi>
                                    <ImSpoonKnife></ImSpoonKnife>
                                    <FaSwimmer></FaSwimmer>
                                    <TbGlass></TbGlass>
                                </p>
                                <div className="my-8"></div>

                                <p className='text-xl font-semibold dark:text-white text-slate-500'>Price : <span className='text-3xl text-slate-800 dark:text-white font-bold'>$500</span> / night</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
        </div>
    );
};

export default HotelRooms;