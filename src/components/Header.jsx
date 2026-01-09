import NavBar from "./NavBar";

export default function Header({ searchTerm, setSearchTerm }) {
  return (
    <>
      <header>
        <h1>EALAÍN</h1>
        <NavBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </header>
    </>
  );
}
