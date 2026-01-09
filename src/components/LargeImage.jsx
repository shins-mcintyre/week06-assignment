// import the Thumbnail and add conditional rendering to it here so the image only appears in specific instances

export default function LargeImage({ photo }) {
  if (!photo) {
    return <div id="frame">Select an image</div>;
  }

  return (
    <div className="frame">
      <img
        src={photo.urls.regular}
        alt={photo.alt_descrisption}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "12px",
        }}
      />
    </div>
  );
}
