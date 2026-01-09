// GALLERY needs to fetch data, hold state and loop over photos

import { useState, useEffect } from "react";
import Thumbnail from "./Thumbnail";
import LargeImage from "./LargeImage";
import NavButton from "./NavButton";

export default function Gallery({ searchTerm }) {
  // STATE -------

  // photos[] -> API data
  const [photos, setPhotos] = useState([]);
  // currentIndex -> which photo is selected
  const [currentIndex, setCurrentIndex] = useState(0);
  // selectedPhoto -> derived from photos[currentIndex]
  const selectedPhoto = photos[currentIndex];

  // FUNCTIONS (EVENT HANDLERS) -------
  function handleThumbnailClick(index) {
    // console.log("the Thumbnail Click function works", photo.id);
    setCurrentIndex(index);
  }

  function handleNextButton() {
    setCurrentIndex((i) => (i + 1) % photos.length);
  }

  function handlePrevButton() {
    setCurrentIndex((i) => (i - 1 + photos.length) % photos.length);
  }

  // EFFECTS -------
  // - fetch data from the API
  // - once it's fetched, put it in state

  useEffect(() => {
    if (!searchTerm) return;

    async function getPhotos() {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?client_id=${
          import.meta.env.VITE_UNSPLASH_ACCESS_KEY
        }&query=${encodeURIComponent(searchTerm)}&per_page=25`

        // import.meta.env.VITE_PHOTO_API_URL
      );
      const data = await response.json();
      setPhotos(data.results);
      // auto-select first image
      setCurrentIndex(0);
    }

    getPhotos();
  }, [searchTerm]);

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
