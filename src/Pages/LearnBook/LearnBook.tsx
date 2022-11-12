import Nav from "../../Components/Nav/Nav";

export default function LearnBook({}): JSX.Element {
  return (
    <div className="LearnBook">
      <Nav
        items={["Html", "Css", "JavaScript", "Git", "Figma"]}
        activeItem="Html"
      />
      <p>Учебник</p>
    </div>
  );
}
