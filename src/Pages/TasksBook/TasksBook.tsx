import "./TasksBook.css";
import Nav from "../../Components/Nav/Nav";
import { useState } from "react";
import SearchIcon from "./icons/SearchIcon";
import Slider from "../../Components/Slider/Slider";
import Task from "./Task/Task";
import { DATA } from "./tasks/other";
import { ITask } from "./tasks/typeTask";

export type ITypeTask = "Все" | "Вёрстка" | "JavaScript" | "Общие";
type ISort = "levelMore" | "levelLess" | "dateMore" | "dateLess";

const TASKS: ITypeTask[] = ["Все", "Вёрстка", "JavaScript", "Общие"];
const DEFAULT_SELECT_TYPE_TASKS: ITypeTask = "Все";

export default function TasksBook(): JSX.Element {
  const [selectTypeTasks, setSelectTypeTasks] = useState<ITypeTask>(
    DEFAULT_SELECT_TYPE_TASKS
  );
  const [minLevel, setMinLevel] = useState<number>(0);
  const [maxLevel, setMaxLevel] = useState<number>(100);
  const [typeSort, setTypeSort] = useState<ISort>("levelMore");

  const sortTasks = (a: ITask, b: ITask): number => {
    if (typeSort === "levelMore") {
      return a.level - b.level;
    }
    if (typeSort === "levelLess") {
      return b.level - a.level;
    }
    if (typeSort === "dateMore") {
      return b.date.getTime() - a.date.getTime();
    }
    if (typeSort === "dateLess") {
      return a.date.getTime() - b.date.getTime();
    }
    throw Error("Сортировка не сработала, передали несуществующий typeSort");
  };

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
            Сложность от {minLevel} до {maxLevel}
          </p>
          <Slider
            width={180}
            valueFrom={minLevel}
            valueTo={maxLevel}
            //@ts-ignore TODO разобраться с типизацией
            changeFrom={setMinLevel}
            //@ts-ignore TODO разобраться с типизацией
            changeTo={setMaxLevel}
          />
        </div>
        <div className="TasksBook__filterSort">
          <select
            onChange={(e) => {
              // @ts-ignore нужная строка гарантируется
              setTypeSort(e.target.value);
            }}
            value={typeSort}
          >
            <option value="levelMore">По возрастанию сложности</option>
            <option value="levelLess">По убыванию сложности</option>
            <option value="dateMore">Сначала новее</option>
            <option value="dateLess">Сначала старее</option>
          </select>
        </div>
        <div className="TasksBook__filterFind">
          <input placeholder="Номер задачи" type="number" />
          <SearchIcon />
        </div>
      </div>
      <div className="TasksBook__tasks">
        {DATA.sort((a, b) => sortTasks(a, b)).map((item: ITask, i: number) => {
          if (item.level < maxLevel && item.level > minLevel) {
            return <Task key={i} {...item} />;
          }
        })}
      </div>
    </div>
  );
}
