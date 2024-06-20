import Aos from 'aos';
import { useEffect } from 'react';
import { FaSwimmer, FaWifi } from 'react-icons/fa';
import { FaCar } from 'react-icons/fa6';
import { MdFoodBank } from 'react-icons/md';

const RoomsFeatures = () => {
  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <div data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1500" className="h-fit py-3 md:h-80 pb-20 md:flex grid items-center gap-5 text-lg text-center max-w-7xl mx-auto">

      <div>
        <FaWifi className='w-full text-6xl text-[#06bfaa]'></FaWifi>
        <h3 className='text-xl font-bold'>Free Wifi</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eos?</p>
      </div>

      <div>
        <FaSwimmer className='w-full text-7xl text-[#06bfaa]'></FaSwimmer>
        <h3 className='text-xl font-bold'>Swimming Pool</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eos?</p>
      </div>

      <div>
        <FaCar className='w-full text-6xl text-[#06bfaa]'></FaCar>
        <h3 className='text-xl font-bold'>Airpot Taxi</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eos?</p>
      </div>

      <div>
        <MdFoodBank className='w-full text-7xl text-[#06bfaa]'></MdFoodBank>
        <h3 className='text-xl font-bold'>Breakfast</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eos?</p>
      </div>
    </div>
  );
};

export default RoomsFeatures;