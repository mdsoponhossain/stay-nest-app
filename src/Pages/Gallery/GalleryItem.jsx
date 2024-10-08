import PropTypes from 'prop-types'
import ThreeSixtyImage from '../../SharedComponent/ThreeSixtyImage';

const GalleryItem = ({galleryItem}) => {
    const {image} = galleryItem ;
    return (
        <div className="card w-full lg:w-96 h-[300px] rounded-none bg-base-100 shadow-xl mx-auto">
            <figure><img className="w-full h-['300px']" src={image} /></figure>
         
           
        </div>
    );
};

GalleryItem.propTypes = {
    galleryItem: PropTypes.object,
 }

export default GalleryItem;