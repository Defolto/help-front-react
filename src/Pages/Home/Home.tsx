import "./Home.css";
import AnimateText from "./AnimateText/AnimateText";
//@ts-ignore
// import img from "./qr_telegram.jpg";

export default function Home(): JSX.Element {
  return (
    <div className="Home">
      <div className="Home__title">
        <p>Сайт для </p>
        <AnimateText words={["практики", "обучения", "поиска", "развития"]} />
      </div>
      <div className="Home__description">
        <p>
          Проект, специально разработанный для учеников, которые хотят научиться
          направлению frontend или улучшить свои текущие знания
        </p>
      </div>
      <div className="Home__linkTelegram">
        <div className="Home__linkTelegramImg">
          {/* <img src={img} alt="ссылка на телеграм" /> */}
        </div>
        <p className="Home__linkTelegramText">
          Присоединяйся к нам на канал, в котором мы публикуем материалы,
          статьи, новости и мемы
        </p>
      </div>
    </div>
  );
}
