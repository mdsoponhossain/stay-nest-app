

const NewsLetter = () => {
    return (
       <div className="bg-base-200">
        <div className="md:flex justify-between pt-10 md:pt-0 p-2 h-fit md:h-[500px] max-w-7xl mx-auto">
            <div className="md:w-[90%] w-full grid justify-center items-center">
                <img className="md:w-4/6 pb-3" src="https://i.ibb.co/W3VhBg4/yellow-envelope-removebg-preview.png" alt="" />
                </div>
            
            <div className=" flex-grow p-4 md:p-10">
                <h3 className=" text-4xl md:text-6xl font-bold ">Subscribe to our Newsletter !</h3>
                <p className="my-3 md:my-5">Stay updated with subscribing to our newsletter</p>
                <form className="my-7 md:my-10">
                    <div>
                        <input className="w-full h-14 pl-3" placeholder="Enter Your Email Here..." type="email" name=""  />
                    </div>
                    <button className="h-14 pl-3  button-primary my-5 text-md border border-black w-full">SUBSCRIBE </button>
                </form>
            </div>
        
        </div>
       </div>
    );
};

export default NewsLetter;