import "./Task.css";
import { ITask } from "../tasks/typeTask";

export default function Task({
  number,
  level,
  date,
  description,
  notes,
  example,
}: ITask): JSX.Element {
  const getCorrectDate = (date: Date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
  };

  return (
    <div className="Task">
      <div className="Task__header">
        <div>
          <p className="Task__headerHard">Сложность {level}</p>
          <p className="Task__headerDate">Дата: {getCorrectDate(date)}</p>
        </div>
        <p className="Task__headerNumber">№{number}</p>
      </div>

      <div className="Task__body">
        <div className="Task_column">
          <div className="Task__bodyDescription">
            <p>Описание</p>
            <p>{description}</p>
          </div>

          <div className="Task__bodyRemarks">
            <p>Замечания</p>
            <ul>
              {notes.map((note, index) => (
                <li key={index}>{note}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="TasksBook__task_column">
          <p>Пример</p>
        </div>
      </div>
    </div>
  );
}
