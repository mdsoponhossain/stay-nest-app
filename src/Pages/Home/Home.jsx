import Banner from "./Banner";
import ClientReviews from "./ClientReviews";
import FeaturedRoom from "./FeaturedRoom";
import NewsLetter from "./NewsLetter";
import SpecialOffer from "./SpecialOffer";


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <FeaturedRoom></FeaturedRoom>
          <NewsLetter></NewsLetter>
          <SpecialOffer></SpecialOffer>
          <ClientReviews></ClientReviews>
        </div>
    );
};

export default Home;