import { FaStar } from 'react-icons/fa';

const ClientReviews = () => {
    return (
        <div className="carousel w-full h-[600px] bg-no-repeat bg-cover " style={{ backgroundImage: 'url(https://i.ibb.co/3vBXvgg/hotel-2.jpg)' }}>



            <div id="slide1" className="carousel-item relative w-full">

                <div className='absolute h-fit  transform -translate-y-1/2  right-5 top-1/2 bg-gradient-to-r from-zinc-500 to-[rgba(21, 21, 21, 0.00)] md:h-full left-0 grid items-center '>
                    <div className=" grid grid-cols-1 lg:grid-cols-3 font-bold">

                        <div className='m-4 p-4  w-72 grid text-center bg-white bg-opacity-30'>
                            <div className="grid justify-center ">
                                <img className="h-14 w-14 inline-block rounded-full" src="https://i.ibb.co/GT95pq8/client-1.jpg" alt="" />
                            </div>
                            <p className="text-xl font-serif font-bold">Alice Johnson</p>
                            <div className='flex items-center justify-center '>
                                <h3 className=' font-serif font-bold'>Ratings:4.5 </h3>
                                <p><FaStar></FaStar></p>
                            </div>
                            <p className='text-md font-serif font-semibold'>Exceptional service and comfortable rooms. I had a wonderful  experience during my stay. Will definitely return.</p>
                        </div>
                        <div className='p-4 w-72 grid text-center  bg-white bg-opacity-30'>
                            <div className="grid justify-center">
                                <img className="h-14 w-14 inline-block rounded-full" src="https://i.ibb.co/GT95pq8/client-1.jpg" alt="" />
                            </div>
                            <p className="text-xl font-serif font-bold">Alice Johnson</p>
                            <div className='flex items-center justify-center '>
                                <h3 className=' font-serif font-bold'>Ratings:4.5 </h3>
                                <p><FaStar></FaStar></p>
                            </div>
                            <p className='text-md font-serif font-semibold'>Exceptional service and comfortable rooms. I had a wonderful  experience during my stay. Will definitely return.</p>
                        </div>
                        <div className='p-4 w-72 grid text-center  bg-white bg-opacity-30'>
                            <div className="grid justify-center">
                                <img className="h-14 w-14 inline-block rounded-full" src="https://i.ibb.co/GT95pq8/client-1.jpg" alt="" />
                            </div>
                            <p className="text-xl font-serif font-bold">Alice Johnson</p>
                            <div className='flex items-center justify-center '>
                                <h3 className=' font-serif font-bold'>Ratings:4.5 </h3>
                                <p><FaStar></FaStar></p>
                            </div>
                            <p className='text-md font-serif font-semibold'>Exceptional service and comfortable rooms. I had a wonderful  experience during my stay. Will definitely return.</p>
                        </div>
                    </div>

                    <div className='absolute  flex transform -translate-y-1/2 justify-center gap-5  left-6 right-6 mt-[40%]'>
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">

                <div className='absolute  transform -translate-y-1/2  right-5 top-1/2 bg-gradient-to-r from-[#817c7c] to-[rgba(21, 21, 21, 0.00)] h-full left-0 grid items-center '>
                    <div className=" grid grid-cols-1 lg:grid-cols-3 font-bold">

                        <div className='p-4 w-72 grid text-center  bg-white bg-opacity-30'>
                            <div className="grid justify-center">
                                <img className="h-14 w-14 inline-block rounded-full" src="https://i.ibb.co/GT95pq8/client-1.jpg" alt="" />
                            </div>
                            <p className="text-xl font-serif font-bold">Alice Johnson</p>
                            <div className='flex items-center justify-center '>
                                <h3 className=' font-serif font-bold'>Ratings:4.5 </h3>
                                <p><FaStar></FaStar></p>
                            </div>
                            <p className='text-md font-serif font-semibold'>Exceptional service and comfortable rooms. I had a wonderful  experience during my stay. Will definitely return.</p>
                        </div>
                        <div className='p-4 w-72 grid text-center  bg-white bg-opacity-30'>
                            <div className="grid justify-center">
                                <img className="h-14 w-14 inline-block rounded-full" src="https://i.ibb.co/GT95pq8/client-1.jpg" alt="" />
                            </div>
                            <p className="text-xl font-serif font-bold">Alice Johnson</p>
                            <div className='flex items-center justify-center '>
                                <h3 className=' font-serif font-bold'>Ratings:4.5 </h3>
                                <p><FaStar></FaStar></p>
                            </div>
                            <p className='text-md font-serif font-semibold'>Exceptional service and comfortable rooms. I had a wonderful  experience during my stay. Will definitely return.</p>
                        </div>
                        <div className='p-4 w-72 grid text-center  bg-white bg-opacity-30'>
                            <div className="grid justify-center">
                                <img className="h-14 w-14 inline-block rounded-full" src="https://i.ibb.co/GT95pq8/client-1.jpg" alt="" />
                            </div>
                            <p className="text-xl font-serif font-bold">Alice Johnson</p>
                            <div className='flex items-center justify-center '>
                                <h3 className=' font-serif font-bold'>Ratings:4.5 </h3>
                                <p><FaStar></FaStar></p>
                            </div>
                            <p className='text-md font-serif font-semibold'>Exceptional service and comfortable rooms. I had a wonderful  experience during my stay. Will definitely return.</p>
                        </div>
                    </div>

                    <div className='absolute flex transform -translate-y-1/2 justify-center  gap-5  left-6 right-6 mt-[40%]'>
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ClientReviews;


