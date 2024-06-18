import Tittle from "../../SharedComponent/Tittle";
import Advertisement from "./Advertisement";
import Banner from "./Banner";
import Footer from "./Footer";
import HotelRooms from "./HotelRooms";
import NewsLetter from "./NewsLetter";
import Reviews from "./Reviews";
import RoomsFeatures from "./RoomsFeatures";
import SpecialOffer from "./SpecialOffer";


const Home = () => {
    return (
        <div className="dark:bg-black dark:text-white">
          <Tittle title='stay-nest/home'/>
          <Banner></Banner>
          <HotelRooms></HotelRooms>
          <SpecialOffer></SpecialOffer>
          <RoomsFeatures></RoomsFeatures>
          <NewsLetter></NewsLetter>
          <Advertisement></Advertisement>
          <Reviews></Reviews>
          <Footer></Footer>
        </div>
    );
};

export default Home;