import Gallery from "./Gallery";

export default function Body({ searchTerm }) {
  return (
    <main className="body-container">
      <Gallery searchTerm={searchTerm} />
    </main>
  );
}
