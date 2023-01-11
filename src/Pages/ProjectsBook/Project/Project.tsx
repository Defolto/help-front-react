import "./Project.css";
import DateIcon from "../icons/DateIcon";
import LevelIcon from "../icons/LevelIcon";
import NumberIcon from "../icons/NumberIcon";
import { getCorrectDate, IProject } from "../projects/typeProject";
import { useAppDispatch } from "../../../hooks";
import { showAlert } from "../../../Components/Alert/AlertSlice";
import ProjectInfo from "../ProjectInfo/ProjectInfo";

export default function Project({
  name,
  description,
  date,
  level,
  number,
  tags,
  notes,
  materials,
  links,
}: IProject): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div
      className="Project"
      onClick={() =>
        dispatch(
          showAlert({
            content: (
              <ProjectInfo
                name={name}
                description={description}
                date={date}
                level={level}
                number={number}
                tags={tags}
                notes={notes}
                materials={materials}
                links={links}
              />
            ),
          })
        )
      }
    >
      <div className="Project__tags">
        {tags.map((tag) => (
          <div className="Project__tag" key={tag}>
            <p>{tag}</p>
          </div>
        ))}
      </div>
      <p className="Project__title">{name}</p>
      <p className="Project__description">{description}</p>
      <div className="Project__info">
        <div className="Project__infoContainer">
          <DateIcon />
          <p>{getCorrectDate(date)}</p>
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
