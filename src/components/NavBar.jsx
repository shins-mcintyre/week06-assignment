import Gallery from "./Gallery";

export default function NavBar({ searchTerm, setSearchTerm }) {
  return (
    <>
      <nav>
        <input
          type="text"
          placeholder="EXPLORE MORE.."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
        <div className="burger">
          <div id="bar"></div>
          <div id="bar"></div>
          <div id="bar"></div>
        </div>
      </nav>
    </>
  );
}
