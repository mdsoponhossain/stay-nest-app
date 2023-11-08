import autoprefixer from "autoprefixer";
import { useLoaderData } from "react-router-dom";


const AboutUs = () => {
    const aboutDataAll = useLoaderData()
    console.log(aboutDataAll)
    return (
        <div className="p-3">
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