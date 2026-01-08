import NavBar from "./NavBar";

export default function Header() {
  return (
    <>
      <header>
        <img
          src="/logos/camera_logo.png"
          alt="Company logo of a camera"
          id="logo"
          href="#/"
        />
        <h1>React Image Gallery</h1>
        <NavBar />
      </header>
    </>
  );
}
