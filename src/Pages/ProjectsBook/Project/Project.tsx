import "./Project.css";
import DateIcon from "../icons/DateIcon";
import LevelIcon from "../icons/LevelIcon";
import NumberIcon from "../icons/NumberIcon";
import { IProject } from "../projects/typeProject";

export default function Project({
  name,
  description,
  dateCreate,
  level,
  number,
  tags,
  notes,
  materials,
  links,
}: IProject): JSX.Element {
  const getCorrectDate = (date: Date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
  };

  return (
    <div className="Project">
      <div className="Project__tags">
        {tags.map((tag) => (
          <div className="Project__tag">
            <p>{tag}</p>
          </div>
        ))}
      </div>
      <p className="Project__title">{name}</p>
      <p className="Project__description">{description}</p>
      <div className="Project__info">
        <div className="Project__infoContainer">
          <DateIcon />
          <p>{getCorrectDate(dateCreate)}</p>
        </div>
        <div className="Project__infoContainer">
          <LevelIcon />
          <p>{level}/100</p>
        </div>
        <div className="Project__infoContainer">
          <NumberIcon />
          <p>{number}</p>
        </div>
      </div>
    </div>
  );
}
