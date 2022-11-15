import "./Home.css";
import AnimateText from "./AnimateText/AnimateText";

export default function Home(): JSX.Element {
  return (
    <div className="Home">
      <div className="Home__title">
        <p>Сайт для </p>
        <AnimateText
          words={["практики.", "обучения.", "поиска.", "развития."]}
        />
      </div>
      <div className="Home__description">
        <p>
          Проект, специально разработанный для учеников, которые хотят научиться
          направлению frontend или улучшить свои текущие знания
        </p>
      </div>
    </div>
  );
}
