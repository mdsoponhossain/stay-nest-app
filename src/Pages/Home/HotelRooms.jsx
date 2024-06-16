// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaWifi} from "react-icons/fa6";
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
const HotelRooms = () => {
    return (
        <div className="h-[700px] mt-96 md:mt-20">
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
                        <div id='card' className=" h-[550px] border-b-2   md:w-[370px] lg:w-96 bg-base-100 shadow-xl ">
                            <figure><img className='w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5vav0Sl_Uek-UXBTvSBy1dtI2j06BXMLL8RzUJRtjFA&s" alt="Shoes" /></figure>
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

                                <p className='text-xl font-semibold text-slate-500'>Price : <span className='text-3xl text-slate-800 font-bold'>$500</span> / night</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* slide two */}
                    <SwiperSlide>
                        <div id='card' className=" h-[550px] border-b-2  md:w-[350px] lg:w-96 bg-base-100 shadow-xl ">
                            <figure><img className='w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5vav0Sl_Uek-UXBTvSBy1dtI2j06BXMLL8RzUJRtjFA&s" alt="Shoes" /></figure>
                            <div className="p-3">
                                <h2 className="text-3xl font-bold ">Family Room 3</h2>
                                <p className='my-6'>Make yourself comfortable in any of our serene guest rooms and spacious suites...</p>
                                <p className='flex gap-10 mt-4'>
                                    <FaWifi></FaWifi>
                                    <ImSpoonKnife></ImSpoonKnife>
                                    <FaSwimmer></FaSwimmer>
                                    <TbGlass></TbGlass>
                                    <PiTelevisionSimpleBold></PiTelevisionSimpleBold>
                                </p>
                                <div className="border border-slate-300 my-8"></div>

                                <p className='text-xl font-semibold text-slate-500'>Price : <span className='text-3xl text-slate-800 font-bold'>$500</span> / night</p>
                            </div>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div id='card' className=" h-[550px] border-b-2  md:w-[350px] lg:w-96 bg-base-100 shadow-xl ">
                            <figure><img className='w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5vav0Sl_Uek-UXBTvSBy1dtI2j06BXMLL8RzUJRtjFA&s" alt="Shoes" /></figure>
                            <div className="p-3">
                                <h2 className="text-3xl font-bold ">Family Room 3</h2>
                                <p className='my-6'>Make yourself comfortable in any of our serene guest rooms and spacious suites...</p>
                                <p className='flex gap-10 mt-4'>
                                    <FaWifi></FaWifi>
                                    <ImSpoonKnife></ImSpoonKnife>
                                    <FaSwimmer></FaSwimmer>
                                    <TbGlass></TbGlass>
                                </p>
                                <div className="border border-slate-300 my-8"></div>

                                <p className='text-xl font-semibold text-slate-500'>Price : <span className='text-3xl text-slate-800 font-bold'>$500</span> / night</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div id='card' className=" h-[550px] border-b-2  md:w-[350px] lg:w-96 bg-base-100 shadow-xl ">
                            <figure><img className='w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5vav0Sl_Uek-UXBTvSBy1dtI2j06BXMLL8RzUJRtjFA&s" alt="Shoes" /></figure>
                            <div className="p-3">
                                <h2 className="text-3xl font-bold ">Family Room 3</h2>
                                <p className='my-6'>Make yourself comfortable in any of our serene guest rooms and spacious suites...</p>
                                <p className='flex gap-10 mt-4'>
                                    <FaWifi></FaWifi>
                                    <ImSpoonKnife></ImSpoonKnife>
                                    <FaSwimmer></FaSwimmer>
                                    <TbGlass></TbGlass>
                                </p>
                                <div className="border border-slate-300 my-8"></div>

                                <p className='text-xl font-semibold text-slate-500'>Price : <span className='text-3xl text-slate-800 font-bold'>$500</span> / night</p>
                            </div>
                        </div>
                    </SwiperSlide>


                    


                </Swiper>
            </section>
        </div>
    );
};

export default HotelRooms;