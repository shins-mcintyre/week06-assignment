import Gallery from "./Gallery";

export default function Body({ searchTerm }) {
  return (
    <main>
      <Gallery searchTerm={searchTerm} />
    </main>
  );
}
