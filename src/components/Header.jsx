import NavBar from "./NavBar";

export default function Header({
  searchTerm,
  setSearchTerm,
  inputValue,
  setInputValue,
}) {
  return (
    <>
      <header>
        <h1>EALAÍN</h1>
        <NavBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      </header>
    </>
  );
}
