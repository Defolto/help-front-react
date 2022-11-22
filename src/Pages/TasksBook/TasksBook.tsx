import "./TasksBook.css";
import Nav from "../../Components/Nav/Nav";
import { useEffect, useState } from "react";
import Task from "./Task/Task";
import { ITask } from "./tasks/typeTask";
import { useAppDispatch } from "../../hooks";
import { showAlert } from "../../Components/Alert/AlertSlice";
import Filter, { ISort, sortTasks } from "../../Components/Filter/Filter";

export type ITypeTask = "Все" | "Вёрстка" | "JavaScript" | "Общие";

const TASKS: ITypeTask[] = ["Все", "Вёрстка", "JavaScript", "Общие"];
const DEFAULT_SELECT_TYPE_TASKS: ITypeTask = "Общие";

function getFileName(type: ITypeTask): string {
  if (type === "Общие") {
    return "other";
  }
  throw Error("Передан несуществующий тип задач");
}

export default function TasksBook(): JSX.Element {
  const dispatch = useAppDispatch();

  const [selectTypeTasks, setSelectTypeTasks] = useState<ITypeTask>(
    DEFAULT_SELECT_TYPE_TASKS
  );
  const [minLevel, setMinLevel] = useState<number>(0);
  const [maxLevel, setMaxLevel] = useState<number>(100);
  const [typeSort, setTypeSort] = useState<ISort>("levelMore");
  const [number, setNumber] = useState<number>(0);
  const [showTasks, setShowTasks] = useState<ITask[]>([]);

  // Для первой загрузки дефолтных задач
  useEffect(() => {
    import(`./tasks/${getFileName(DEFAULT_SELECT_TYPE_TASKS)}`)
      .then((obj) => {
        setShowTasks(obj.DATA);
      })
      .catch(() => {
        dispatch(showAlert("Задач с таким типом нет"));
      });
  }, []);

  return (
    <div className="TasksBook">
      <Nav
        items={TASKS}
        activeItem={selectTypeTasks}
        onSelect={setSelectTypeTasks}
      />
      <Filter
        find={{ number, changeNumber: setNumber }}
        level={{
          minLevel,
          maxLevel,
          changeMaxLevel: setMaxLevel,
          changeMinLevel: setMinLevel,
        }}
        sort={{ type: typeSort, changeType: setTypeSort }}
      />
      <div className="TasksBook__tasks">
        {number
          ? showTasks.map((item, i) => {
              if (item.number === number) {
                return <Task key={i} {...item} />;
              }
            })
          : showTasks
              .sort((a, b) => sortTasks(typeSort, a, b))
              .map((item: ITask, i: number) => {
                if (item.level < maxLevel && item.level > minLevel) {
                  return <Task key={i} {...item} />;
                }
              })}
      </div>
    </div>
  );
}
