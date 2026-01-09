export default function NavButton({ handler, text }) {
  return <button onClick={handler}>{text}</button>;
}
