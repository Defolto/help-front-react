import "./Project.css";
import DateIcon from "../icons/DateIcon";
import LevelIcon from "../icons/LevelIcon";
import NumberIcon from "../icons/NumberIcon";

export default function Project(): JSX.Element {
  return (
    <div className="Project">
      <div className="Project__tags">
        <div className="Project__tag">
          <p>React</p>
        </div>
        <div className="Project__tag">
          <p>JavaScript</p>
        </div>
        <div className="Project__tag">
          <p>Html</p>
        </div>
      </div>
      <p className="Project__title">Приложение для погоды</p>
      <p className="Project__description">
        Приложение, использующее fetch запросы для отображения актуальной погоды
        в выбранном регионе и определённое время. Предоставлены такие функции
        как: влажность, солнечность и ветер.
      </p>
      <div className="Project__info">
        <div className="Project__infoContainer">
          <DateIcon />
          <p>23.11.22</p>
        </div>
        <div className="Project__infoContainer">
          <LevelIcon />
          <p>52/100</p>
        </div>
        <div className="Project__infoContainer">
          <NumberIcon />
          <p>112457</p>
        </div>
      </div>
    </div>
  );
}
