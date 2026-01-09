import Gallery from "./Gallery";

export default function NavBar({ setSearchTerm, inputValue, setInputValue }) {
  return (
    <>
      <nav>
        <input
          className="search-bar"
          type="text"
          placeholder="EXPLORE MORE.."
          // to keep the text explore more...
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setSearchTerm(inputValue);
            }
          }}
        ></input>

        <div className="dropdown-menu">
          <div className="burger">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <div className="dropdown-menu-content">
            <a href="#">OUR STORY</a>
            <a href="#">WHERE TO FIND US</a>
            <a href="#">EXPLORE COLLECTIONS</a>
          </div>
        </div>
      </nav>
    </>
  );
}
