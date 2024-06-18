
const Advertisement = () => {
    return (
        <div className="dark:bg-black w-full md:p-2  bg-white max-w-7xl mx-auto mt-14 md:mt-24 ">
            <h1 className=" md:mb-7 items-start text-center text-4xl font-bold ">Advertisement</h1>
            <marquee direction="left">

                <div className="flex lg:p-2   lg:w-[400px]  mt-3 gap-4">
                    <img src="https://logowik.com/content/uploads/images/walton2982.jpg" alt="" className=" py-10 w-[40%] h-[25%]" />
                    <img src="https://www.bnpbd.org/assets/images/Nagad-Logo.wine.png" alt="" className=" py-10 w-[45%] h-[30%] " />
                    <img src="https://i.ibb.co/19TZfJf/2-1.png" alt="" className=" py-10 w-[45%] h-[30%] " />
                    <img src="https://i.ibb.co/YyY7v8w/1-1.png" alt="" className=" py-10 w-[45%] h-[30%] " />
                    <img src="https://i.ibb.co/jWMyFDQ/3-1.png" alt="" className=" py-10 w-[45%] h-[30%] " />
                    <img src="https://media.licdn.com/dms/image/C5103AQHwGikXYhMR-g/profile-displayphoto-shrink_800_800/0/1550751522436?e=2147483647&v=beta&t=9aSX1P5NhhHxObMt6DvnkKflUXcUiCsu49uXsFExXwQ" alt="" className=" py-10 w-[35%] h-[20%] " />

                    <img src="https://i.ibb.co/cxRNBC2/4.png" alt="" className=" py-10 w-[45%] h-[30%] " />
                    <img src="https://www.businessinsiderbd.com/media/imgAll/2020October/en/Islami-bank-logo-2108021201.png" alt="" className=" py-10 w-[30%] h-[15%] " />
                </div>
            </marquee>
        </div>
    );
};

export default Advertisement;