// GALLERY needs to fetch data, hold state and loop over photos

import { useState, useEffect } from "react";
import Thumbnail from "./Thumbnail";
import LargeImage from "./LargeImage";
import NavButton from "./NavButton";

export default function Gallery() {
  // STATE
  // - variable to store API image data
  // - variable to store current image

  // photos[]        → source of truth (API data)
  // currentIndex   → which photo is selected
  // selectedPhoto  → derived from photos[currentIndex]
  const [photos, setPhotos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const selectedPhoto = photos[currentIndex];

  // FUNCTIONS (EVENT HANDLERS)
  // - when a user clicks an image
  // - when a user presses a button that should switch the image (left and right)
  function handleThumbnailClick(index) {
    // console.log("the Thumbnail Click function works", photo.id);
    setCurrentIndex(index);
  }

  // function handleNextButton() {
  //   setSelectedPhoto(selectedPhoto + 1);
  // }

  function handleNextButton() {
    setCurrentIndex((i) => (i + 1) % photos.length);
  }

  // function handlePrevButton() {
  //   setSelectedPhoto(selectedPhoto - 1);
  // }

  function handlePrevButton() {
    setCurrentIndex((i) => (i - 1 + photos.length) % photos.length);
  }

  // EFFECTS
  // - fetch data from the API
  // - once it's fetched, put it in state
  useEffect(() => {
    async function getPhotos() {
      const response = await fetch(import.meta.env.VITE_PHOTO_API_URL);
      const data = await response.json();
      setPhotos(data);
      setCurrentIndex(0);

      // auto-select first image
      // setSelectedPhoto(data[0]);
    }

    getPhotos();
  }, []);

  return (
    <>
      <div className="gallery">
        {photos.map((photo, index) => (
          <Thumbnail
            key={photo.id}
            photo={photo}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>

      <div className="large-image-container">
        <LargeImage photo={selectedPhoto} />

        <div className="nav-button-container">
          <NavButton
            className="nav-button"
            handler={handlePrevButton}
            text="<"
          />

          <NavButton
            className="nav-button"
            handler={handleNextButton}
            text=">"
          />
        </div>
      </div>
    </>
  );
}
