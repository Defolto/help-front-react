import "./TasksBook.css";
import Nav from "../../Components/Nav/Nav";
import { useEffect, useState } from "react";
import SearchIcon from "./icons/SearchIcon";
import Slider from "../../Components/Slider/Slider";
import Task from "./Task/Task";
import { ITask } from "./tasks/typeTask";
import { useAppDispatch } from "../../hooks";
import { showAlert } from "../../Components/Alert/AlertSlice";

export type ITypeTask = "Все" | "Вёрстка" | "JavaScript" | "Общие";
type ISort = "levelMore" | "levelLess" | "dateMore" | "dateLess";

const TASKS: ITypeTask[] = ["Все", "Вёрстка", "JavaScript", "Общие"];
const DEFAULT_SELECT_TYPE_TASKS: ITypeTask = "Общие";

function getFileName(type: ITypeTask): string {
  if (type === "Все"){
    return "Все"
  }
  if (type === "Вёрстка") {
    return "layout";
  }
  if (type === "JavaScript") {
    return "javaScript";
  }
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

  // сортировка задач исходя из select
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

  function importAllTasks() {
    setShowTasks([])//Обнуляю массив чтобы не было повторений иначе 1ое задание будет повторяться
    import(`./tasks/other`)
        .then((obj) => {
          setShowTasks(prev=>prev.concat(obj.DATA));
        })
    import(`./tasks/javaScript`)
        .then((obj) => {
          setShowTasks(prev=>prev.concat(obj.DATA));
        })
    import(`./tasks/layout`)
        .then((obj) => {
          setShowTasks(prev=>prev.concat(obj.DATA));
        })
  }

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

  //Загрузка других типов задач
  useEffect(() => {
    if (getFileName(selectTypeTasks) !== "Все"){
      import(`./tasks/${getFileName(selectTypeTasks)}`)
        .then((obj) => {
          setShowTasks(obj.DATA);
        })
        .catch(() => {
          dispatch(showAlert("Задач с таким типом нет"));
        });
    }else{ //Выполняется когда надо отобразить все задачи
      importAllTasks()
    //   for (let i = 0; i < showTasks.length; i++) {
    //     console.log(showTasks[i].number)
    //   }
    }
  }, [selectTypeTasks]);

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
          <input
            onChange={(e: any) => {
              setNumber(parseInt(e.target.value));
            }}
            placeholder="Номер задачи"
            type="number"
          />
          <SearchIcon />
        </div>
      </div>
      <div className="TasksBook__tasks">
        {number
          ? showTasks.map((item, i) => {
              if (item.number === number) {
                return <Task key={i} {...item} />;
              }
            })
          : showTasks
              .sort((a, b) => sortTasks(a, b))
              .map((item: ITask, i: number) => {
                if (item.level < maxLevel && item.level > minLevel) {
                  return <Task key={i} {...item} />;
                }
              })}
      </div>
    </div>
  );
}
