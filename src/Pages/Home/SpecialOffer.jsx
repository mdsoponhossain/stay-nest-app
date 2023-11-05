

const SpecialOffer = () => {
    return (
        <div className=" h-auto grid items-center py-20 bg-base-200">
            <h3 className="text-4xl mb-2 text-center text-gray-600  font-bold">Special Offers</h3>

            <div className="hero-content gap-0 border-4   flex-col lg:flex-row w-3/5 mx-auto">
                <div className="border-4 h-56">
                    <img className="h-full  border-white" src="https://i.ibb.co/3vBXvgg/hotel-2.jpg" />
                </div>
                <div className=" w-3/4 pl-5 h-56 text-gray-600 bg-white">
                    <h1 className="text-3xl font-bold">Luxury Room</h1>
                    <p className="font-semibold">Start From $249</p>

                    <p className="py-2 font-semibold">Book your stay on our hotel booking website and enjoy a <span className="text-2xl">5%</span> discount when you make your reservation online. Don't miss this opportunity to save on your next getaway!</p>
                    <button className="btn text-white bg-[#0cc4b0] hover:bg-[#09ad9b]">Book Now</button>
                </div>
            </div>

            <div className="hero-content gap-0 border-4   flex-col lg:flex-row w-3/5 mx-auto">

                <div className=" w-3/4 pl-5 h-56 text-gray-600 bg-white">
                    <h1 className="text-3xl font-bold">  Family Suit</h1>
                    <p className="font-semibold"> Start From $279</p>
                    <p className="py-2 font-semibold"> Our Family Fun Getaway Package is designed to make your family's stay both memorable and affordable.Enjoy your <span className="text-2xl">10%</span> discount on the total booking amount.</p>
                    <button className="btn text-white bg-[#0cc4b0] hover:bg-[#09ad9b]">Book Now</button>
                </div>
                <div className="border-4 h-56">
                    <img className="h-full  border-white" src="https://i.ibb.co/d7ChPFF/hotel-3.jpg" />
                </div>
            </div>

          
 

  


        </div>
    );
};

export default SpecialOffer;