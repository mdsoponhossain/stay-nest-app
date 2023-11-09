import Tittle from "../../SharedComponent/Tittle";
import Banner from "./Banner";
import ClientReviews from "./ClientReviews";
import FeaturedRoom from "./FeaturedRoom";
import NewsLetter from "./NewsLetter";
import SpecialOffer from "./SpecialOffer";


const Home = () => {
    return (
        <div>
          <Tittle title='stay-nest/home'/>
          <Banner></Banner>
          <FeaturedRoom></FeaturedRoom>
          <NewsLetter></NewsLetter>
          <SpecialOffer></SpecialOffer>
          <ClientReviews></ClientReviews>
        </div>
    );
};

export default Home;