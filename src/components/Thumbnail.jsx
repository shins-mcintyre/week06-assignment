// THUMBNAIL should display one image, receive data via props and handle clicks
// use jsx inside .map()

export default function Thumbnail({ photo }) {
  return (
    <img
      //   key={photo.id}
      src={photo.urls.small}
      alt={photo.alt_description}
      width="200"
    />
  );
}
