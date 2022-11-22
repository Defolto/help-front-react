import "./Filter.css";
import Slider from "../Slider/Slider";
import SearchIcon from "./SearchIcon";
import { ITask } from "../../Pages/TasksBook/tasks/typeTask";

export type ISort = "levelMore" | "levelLess" | "dateMore" | "dateLess";
type Props = {
  level: {
    minLevel: number;
    maxLevel: number;
    changeMinLevel: (value: number) => void;
    changeMaxLevel: (value: number) => void;
  };
  sort: {
    type: string;
    changeType: (value: any) => void;
  };
  find: {
    number: number;
    changeNumber: (value: number) => void;
  };
};

// сортировка задач исходя из select
export const sortTasks = (typeSort: ISort, a: ITask, b: ITask): number => {
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

export default function Filter({ level, find, sort }: Props): JSX.Element {
  return (
    <div className="Filter">
      <div className="Filter__level">
        <p>
          Сложность от {level.minLevel} до {level.maxLevel}
        </p>
        <Slider
          width={180}
          valueFrom={level.minLevel}
          valueTo={level.maxLevel}
          //@ts-ignore TODO разобраться с типизацией
          changeFrom={level.changeMinLevel}
          //@ts-ignore TODO разобраться с типизацией
          changeTo={level.changeMaxLevel}
        />
      </div>
      <div className="Filter__sort">
        <select
          onChange={(e) => {
            // @ts-ignore нужная строка гарантируется
            sort.changeType(e.target.value);
          }}
          value={sort.type}
        >
          <option value="levelMore">По возрастанию сложности</option>
          <option value="levelLess">По убыванию сложности</option>
          <option value="dateMore">Сначала новее</option>
          <option value="dateLess">Сначала старее</option>
        </select>
      </div>
      <div className="Filter__find">
        <input
          onChange={(e: any) => {
            find.changeNumber(parseInt(e.target.value));
          }}
          value={find.number}
          placeholder="Номер задачи"
          type="number"
        />
        <SearchIcon />
      </div>
    </div>
  );
}
