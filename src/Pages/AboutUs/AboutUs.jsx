import autoprefixer from "autoprefixer";
import { useLoaderData } from "react-router-dom";
import Tittle from "../../SharedComponent/Tittle";


const AboutUs = () => {
    const aboutDataAll = useLoaderData()
    console.log(aboutDataAll)
    return (
        <div className="p-3  dark:bg-black dark:text-slate-300 ">
            <Tittle  title='stay-nest/about-us'/>
            <div>
                {
                    aboutDataAll.map(aboutData=><div className="my-5 p-2"  key={aboutData._id}> 
                    <p className="font-bold text-2xl">{aboutData.title}</p> 
                    <span className="font-semibold text-2xl"> {aboutData.about_us} </span>
                    </div>)
                }
            </div>
            
        </div>
    );
};

export default AboutUs;