// import { useState, useEffect } from "react";
// import dotenv from "dotenv"
import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import SecondHeader from "./components/SecondHeader";

// ! DO NOT PUT ALL YOUR CODE IN APP.JSX - USE COMPONENTS

// NEW VERSION
function App() {
  // app.jsx is parent so needs to own the searchTerm state to be able to pass it from header to gallery
  // searchTerm -> for the search bar
  const [searchTerm, setSearchTerm] = useState("paintings");
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <body>
        <Header
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
        <SecondHeader />
        <Body searchTerm={searchTerm} />
        <Footer />
      </body>
    </>
  );
}

export default App;
