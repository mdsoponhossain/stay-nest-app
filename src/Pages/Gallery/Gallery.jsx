import { useLoaderData } from "react-router-dom";
import GalleryItem from "./GalleryItem";
import Tittle from "../../SharedComponent/Tittle";


const Gallery = () => {
    const galleries = useLoaderData();
    console.log(galleries)
    return (
        <div>
            <Tittle  title='stay-nest/gallery'/>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                   galleries.map(galleryItem=><GalleryItem key={galleryItem._id} galleryItem={galleryItem}></GalleryItem>)
                }
            </div>
        </div>
    );
};

export default Gallery;