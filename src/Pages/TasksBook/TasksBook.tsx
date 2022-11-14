import "./TasksBook.css";
import Nav from "../../Components/Nav/Nav";
import { useState } from "react";

export type ITypeTask = "Все" | "Вёрстка" | "JavaScript" | "Общие";

const TASKS: ITypeTask[] = ["Все", "Вёрстка", "JavaScript", "Общие"];
const DEFAULT_SELECT_TYPE_TASKS: ITypeTask = "Все";

export default function TasksBook(): JSX.Element {
  const [selectTypeTasks, setSelectTypeTasks] = useState(
    DEFAULT_SELECT_TYPE_TASKS
  );

  return (
    <div className="TasksBook">
      <Nav
        items={TASKS}
        activeItem={selectTypeTasks}
        onSelect={setSelectTypeTasks}
      />
      <div className="TasksBook__filter">
        <div className="TasksBook__filterHard">
          <p>
            Уровень сложности: <span>15</span>
          </p>
          <input type="range" />
        </div>
        <div className="TasksBook__filterFind">
          <input type="number" />
        </div>
      </div>
    </div>
  );
}
