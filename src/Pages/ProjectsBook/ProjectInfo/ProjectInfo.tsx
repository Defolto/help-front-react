import "./ProjectInfo.css";
import { getCorrectDate, IProject } from "../projects/typeProject";
import DateIcon from "../icons/DateIcon";
import LevelIcon from "../icons/LevelIcon";
import NumberIcon from "../icons/NumberIcon";

export default function ProjectInfo({
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
  return (
    <div className="ProjectInfo">
      <div className="ProjectInfo__tags">
        {tags.map((tag) => (
          <div className="ProjectInfo__tag" key={tag}>
            <p>{tag}</p>
          </div>
        ))}
      </div>
      <p className="ProjectInfo__name">{name}</p>
      <p>{description}</p>
      <div className="ProjectInfo__wrapper">
        <p>Замечания</p>
        {materials.length ? (
          <ul>
            {notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        ) : (
          <p>К заданию нет замечаний</p>
        )}
      </div>
      <div className="ProjectInfo__wrapper">
        <p>Материалы</p>
        {materials.length ? (
          <ul>
            {materials.map((material) => (
              <li key={material.title}>
                <a download href={material.src}>
                  {material.title}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p>К заданию нет материалов</p>
        )}
      </div>
      <div className="ProjectInfo__wrapper">
        <p>Ресурсы</p>
        {links.length ? (
          <ul>
            {links.map((link) => (
              <li key={link.title}>{link.title}</li>
            ))}
          </ul>
        ) : (
          <p>К заданию нет ресурсов</p>
        )}
      </div>
      <div className="ProjectInfo__info">
        <div className="ProjectInfo__infoContainer">
          <DateIcon />
          <p>{getCorrectDate(dateCreate)}</p>
        </div>
        <div className="ProjectInfo__infoContainer">
          <LevelIcon />
          <p>{level}/100</p>
        </div>
        <div className="ProjectInfo__infoContainer">
          <NumberIcon />
          <p>{number}</p>
        </div>
      </div>
    </div>
  );
}
