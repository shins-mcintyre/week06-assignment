// THUMBNAIL should display one image, receive data via props and handle clicks
// use jsx inside .map()
import LargeImage from "./LargeImage";

export default function Thumbnail({ photo, onClick }) {
  return (
    <img
      className="thumbnail"
      src={photo.urls.thumb}
      alt={photo.alt_description}
      onClick={onClick}
    />
  );
}
