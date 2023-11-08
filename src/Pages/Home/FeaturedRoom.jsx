import { FaSwimmer, FaWifi, FaPhoneVolume } from 'react-icons/fa';
import { MdFoodBank } from 'react-icons/md'


const FeaturedRoom = () => {
    return (
        <div className="bg-base-200 py-40 ">
                <h3 className='text-center text-4xl text-gray-600 py-6 font-bold'>Room Features</h3>
            <div className="md:w-3/5 grid h-fit md:grid-cols-2   items-center w-full   border-4 mx-auto">
                <div className="border-4 my-auto h-[400px] ">
                    <img className="h-full" src="https://i.ibb.co/3vBXvgg/hotel-2.jpg" alt="" />
                </div>
                <div className="border-4 space-y-6 h-[400px] my-auto">
                    <div className="bg-[#06bfaa] text-white flex  items-center pl-3  h-20">
                        <p className='text-2xl'><FaWifi></FaWifi></p>
                        <h3 className="pl-2">24/7 WiFi</h3>

                    </div>
                    <div className="bg-[#06bfaa] text-white h-20 p-6 flex items-center ">
                        <p className='text-2xl'>< FaSwimmer></FaSwimmer></p>
                        <h3 className="pl-2">Swimming Pool</h3>
                    </div>


                    <div className="bg-[#06bfaa] text-white h-20 flex items-center pl-3">
                        <p className='text-2xl'><MdFoodBank></MdFoodBank></p>
                        <h3 className="pl-2">Break Fast</h3>

                    </div>
                    <div className="bg-[#06bfaa] text-white h-20 flex items-center pl-3">
                        <p className='text-2xl'><FaPhoneVolume></FaPhoneVolume></p>
                        <h3 className="pl-2">24/7 Call service</h3>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default FeaturedRoom;