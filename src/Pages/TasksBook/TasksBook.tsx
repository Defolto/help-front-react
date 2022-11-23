import "./TasksBook.css";
import Nav from "../../Components/Nav/Nav";
import { useEffect, useState } from "react";
import Task from "./Task/Task";
import { ITask } from "./tasks/typeTask";
import { useAppDispatch } from "../../hooks";
import Filter, { ISort, sortTasks } from "../../Components/Filter/Filter";

export type ITypeTask = "Все" | "Вёрстка" | "JavaScript" | "Общие";

// Первым элементом должно стоять "Все", иначе importAllTasks сработает неправильно
const TASKS: ITypeTask[] = ["Все", "Вёрстка", "JavaScript", "Общие"];
const DEFAULT_SELECT_TYPE_TASKS: ITypeTask = "Общие";

function getFileName(type: ITypeTask): string {
  if (type === "Все") {
    throw Error(
      "Нельзя передавать тип 'Все', для этого вызывать importAllTasks"
    );
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

  function importAllTasks() {
    // Обнуление массива чтобы не было повторений иначе 1ое задание будет повторяться
    setShowTasks([]);
    try {
      for (let i = 1; i < TASKS.length; i++) {
        import(`./tasks/${getFileName(TASKS[i])}`).then((obj) => {
          setShowTasks((prev) => prev.concat(obj.DATA));
        });
      }
    } catch (e) {
      throw Error(`Невозможно загрузить все задачи`);
    }
  }

  // Для первой загрузки дефолтных задач
  useEffect(() => {
    import(`./tasks/${getFileName(DEFAULT_SELECT_TYPE_TASKS)}`)
      .then((obj) => {
        setShowTasks(obj.DATA);
      })
      .catch(() => {
        throw Error(
          `DEFAULT_SELECT_TYPE_TASKS, не существует такого типа задач`
        );
      });
  }, [dispatch]);

  // Загрузка других типов задач
  useEffect(() => {
    if (selectTypeTasks !== TASKS[0]) {
      import(`./tasks/${getFileName(selectTypeTasks)}`)
        .then((obj) => {
          setShowTasks(obj.DATA);
        })
        .catch(() => {
          throw Error(
            `Неправильно передан selectTypeTasks, было ${selectTypeTasks}`
          );
        });
    } else {
      importAllTasks();
    }
  }, [selectTypeTasks, dispatch]);

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
