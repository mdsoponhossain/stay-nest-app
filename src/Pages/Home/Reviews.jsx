import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { useRef } from 'react';
// import { FaStar } from 'react-icons/fa';

import ReactStars from "react-rating-stars-component";
import { useEffect } from 'react';
import Aos from 'aos';



const Reviews = () => {

    useEffect(() => {
        Aos.init();
      }, [])

    return (
        <div className='bg-slate-100 pt-5 dark:bg-black dark:text-white '>
          <h3 className="text-4xl mb-2 text-center dark:text-white text-gray-600 pt-4 md:pt-20 font-bold">Testimonials</h3>
            <div className='h-fit md:h-[400px] max-w-7xl mx-auto flex  items-center'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={false}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='m-4 p-4 h-full  md:h-52 lg:w-[700px] md:w-[80%] mx-auto md:flex lg:gap-10 md:gap-5  items-center'>


                            <div className='flex justify-center'>
                                <img className="h-36 w-40 mx-auto   inline-block rounded-full" src="https://i.ibb.co/GT95pq8/client-1.jpg" alt="" />
                            </div>


                            <div className='h-fit md:w-3/4'>
                                <h3 className="text-xl font-serif font-bold">Alice Johnson</h3>
                                <ReactStars
                                    count={5}
                                    size={35}
                                    activeColor="#ffd700"
                                    isHalf={true}
                                />
                                <p className='text-md font-serif text-justify font-semibold mt-0'>“Exceptional service and comfortable rooms. I had a wonderful  experience during my stay. Will definitely return.”</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='m-4 p-4 h-full md:h-52 lg:w-[700px] md:w-[80%] mx-auto md:flex lg:gap-10 md:gap-5  items-center'>


                            <div className='flex justify-center'>
                                <img className="h-36 w-40 mx-auto   inline-block rounded-full" src="https://i.ibb.co/GT95pq8/client-1.jpg" alt="" />
                            </div>


                            <div className='h-fit md:w-3/4'>
                                <h3 className="text-xl font-serif font-bold">Alice Johnson</h3>
                                <ReactStars
                                    count={5}
                                    size={35}
                                    activeColor="#ffd700"
                                    isHalf={true}
                                />
                                <p className='text-md font-serif text-justify font-semibold mt-0'>“Exceptional service and comfortable rooms. I had a wonderful  experience during my stay. Will definitely return.”</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='m-4 p-4 h-full md:h-52 lg:w-[700px] md:w-[80%] mx-auto md:flex lg:gap-10 md:gap-5  items-center'>


                            <div className='flex justify-center'>
                                <img className="h-36 w-40 mx-auto   inline-block rounded-full" src="https://i.ibb.co/GT95pq8/client-1.jpg" alt="" />
                            </div>


                            <div className='h-fit md:w-3/4'>
                                <h3 className="text-xl font-serif font-bold">Alice Johnson</h3>
                                <ReactStars
                                    count={5}
                                    size={35}
                                    activeColor="#ffd700"
                                    isHalf={true}
                                />
                                <p className='text-md font-serif text-justify font-semibold mt-0'>“Exceptional service and comfortable rooms. I had a wonderful  experience during my stay. Will definitely return.”</p>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    );
};

export default Reviews;