/* eslint-disable react/prop-types */
import '../styles/ImageItem.scss';

// eslint-disable-next-line react/prop-types
function ImageItem({index , image }) {

   // eslint-disable-next-line react/prop-types
   const imageLink = image.urls.regular;
   const imageLinkToRedirect = image.links.html;

   const handleRedirect = () => {
    window.open(imageLinkToRedirect, '_blank')
   }

    return (<img className='imageItem__img' src={imageLink} alt={index} onClick={handleRedirect} />)
}

export default ImageItem;
