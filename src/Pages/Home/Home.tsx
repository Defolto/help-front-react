import "./Home.css";
import AnimateText from "./AnimateText/AnimateText";

export default function Home(): JSX.Element {
  return (
    <div className="Home">
      <div className="Home__title">
        <p>Nachos are </p>
        <AnimateText words={["раз", "два", "три", "четыре"]} />
      </div>
    </div>
  );
}
