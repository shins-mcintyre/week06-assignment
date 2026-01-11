// THUMBNAIL should display one image, receive data via props and handle clicks
// use jsx inside .map()
import LargeImage from "./LargeImage";

export default function Thumbnail({ photo, onClick, isSelected }) {
  return (
    <button
    className="thumbnail-button"
    aria-pressed={isSelected}
    onClick={onClick}
    aria-label={`View ${photo.alt_description || "image"}`}>
      
    <img
      className="thumbnail"
      src={photo.urls.thumb}
      alt={photo.alt_description || "Gallery image"}
      // onClick={onClick}
    />
    </button>
  )}

