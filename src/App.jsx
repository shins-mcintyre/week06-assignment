// import { useState, useEffect } from "react";
// import dotenv from "dotenv"
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";

// ! DO NOT PUT ALL YOUR CODE IN APP.JSX - USE COMPONENTS

// NEW VERSION
function App() {
  return (
    <>
      <Header />
      <Body />

      <div>
        One big image, or a modal that is only sometimes there (conditional
        rendering)
      </div>

      <Footer />
    </>
  );
}

// function App() {
//   // STATE
//   // - variable to store API image data
//   // - variable to store current image
//   const [photos, setPhotos] = useState([]);

//   // EFFECTS
//   // - fetch data from the API
//   // - once it's fetched, put it in state
//   useEffect(() => {
//     async function getPhotos() {
//       // TODO: use env to hide the access key - check API workshop
//       const response = await fetch(import.meta.env.VITE_PHOTO_API_URL);
//       const data = await response.json();
//       setPhotos(data);
//     }

//     getPhotos();
//   }, []);

//   // FUNCTIONS (EVENT HANDLERS)
//   // - when a user clicks an image
//   // - when a user presses a button that should switch the image (left and right)

//   return (
//     <>
//       <Header />
//       <Body />

//       {/* TODO: CHANGE THE STYLING OF THE GALLERY */}
//       <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
//         <p>Thumbnail container, showing all the images using .map()</p>
//         {photos.map((photo) => (
//           <img
//             key={photo.id}
//             src={photo.urls.small}
//             alt={photo.alt_description}
//             width="200"
//           />
//         ))}
//       </div>
//       {/* THIS WILL NEED TO CHANGE/BE ADDED INTO COMPONENT? */}
//       {photos && <img src={photos} alt="Photo" width="400" />}

//       <div>
//         One big image, or a modal that is only sometimes there (conditional
//         rendering)
//       </div>

//       <Footer />
//     </>
//   );
// }

export default App;
