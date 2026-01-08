// GALLERY needs to fetch data, hold state and loop over photos

import { useState, useEffect } from "react";
import Thumbnail from "./Thumbnail";

export default function Gallery() {
  // STATE
  // - variable to store API image data
  // - variable to store current image
  const [photos, setPhotos] = useState([]);

  // EFFECTS
  // - fetch data from the API
  // - once it's fetched, put it in state
  useEffect(() => {
    async function getPhotos() {
      const response = await fetch(import.meta.env.VITE_PHOTO_API_URL);
      const data = await response.json();
      setPhotos(data);
    }

    getPhotos();
  }, []);

  // FUNCTIONS (EVENT HANDLERS)
  // - when a user clicks an image
  // - when a user presses a button that should switch the image (left and right)

  return (
    <>
      {/* TODO: CHANGE THE STYLING OF THE GALLERY */}
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {photos.map((photo) => (
          <Thumbnail key={photo.id} photo={photo} />
        ))}
      </div>
    </>
  );
}
