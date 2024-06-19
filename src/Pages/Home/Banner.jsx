
import { Link, useNavigate } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter'

const Banner = () => {
    const navigate = useNavigate();
    const handleForm = (e) => {
        e.preventDefault();
        navigate('/rooms')

    }


    return (
        <div className="hero h-[60vh] z-0  md:h-[92vh] mb-16 md:mb-0 relative dark:bg-black " style={{ backgroundImage: 'url(https://t3.ftcdn.net/jpg/00/29/13/38/360_F_29133877_bfA2n7cWV53fto2BomyZ6pyRujJTBwjd.jpg)' }}>

            <div className="hero-overlay bg-black bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content absolute  top-[13vh] md:top-[25vh] lg:top-[30vh]">
                <div className="max-w-5xl ">
                    <h3 className=' text-2xl md:text-4xl lg:text-5xl font-serif font-bold mt-10' >Welcome to StayNest Hotel</h3>
                    <p className="text-xl font-bold">  </p>
                    <br></br>
                    <br className='hidden md:block'></br>

                    {/* typwriter effects */}
                    <Typewriter
                        words={['We are always dedicated to you.', 'Where every stay is unique.', 'We are nearby to you', 'And we always ready to your need.']}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        loop={true}
                    />
                    <br></br>
                    <br></br>
                    <br className='hidden md:block'></br>

                        <Link className=" border mt-4 md:mt-10 border-white py-2 px-3 md:py-3 md:px-6 font-semibold md:font-bold hover:bg-white hover:text-[#079988]" to='/rooms'>BOOK NOW</Link>

                </div>
            </div>
            {/* form container */}
            <div className="max-w-7xl  z-10   absolute -bottom-[57vh] md:-bottom-[12vh] md:bg-white h-fit xl:w-[90%] lg:w-[90%] md:w-[95%] md:mx-auto w-full">
                <form onSubmit={handleForm} className="p-5 pt-14 md:pt-0 shadow-lg  w-[92%] bg-white dark:bg-black mx-auto md:w-full">
                    <div className="md:flex gap-3 justify-center items-end md:h-24 lg:h-28 pb-6">
                        <div className="mb-5 md:mb-0">
                            <span>From</span>
                            <input type="date"  className="h-12 pl-3 w-full xl:w-52
                            lg:w-40 md:w-32 border border-black dark:bg-slate-700 " required />
                        </div>

                        <div className="mb-5 md:mb-0">
                            <span>To</span>
                            <input type="date" className="h-12 pl-3 xl:w-52
                            lg:w-40 md:w-32 border border-black w-full dark:bg-slate-700" required />
                        </div>

                        <div className="mb-5 md:mb-0">
                            <input type="text" placeholder="Adults" className=" h-12 pl-3 xl:w-52
                            lg:w-40 md:w-32 border border-black w-full dark:text-white dark:bg-slate-700" required />
                        </div>

                        <div className="mb-5 md:mb-0">
                            <input type="text" placeholder="Childrens" className="h-12 pl-3 xl:w-52
                            lg:w-40 md:w-32 border border-black w-full dark:text-white  dark:bg-slate-700" required/>
                        </div>

                        <div className="mb-5 md:mb-0">
                            <button className="h-12 pl-3 xl:w-52 button-primary text-md
                            lg:w-40 md:w-32 border border-black w-full ">
                                CHECK AVIAILAVILITY
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Banner;

