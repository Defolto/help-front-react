import Nav from "../../Components/Nav/Nav";
import { useEffect, useState } from "react";
import Filter, { ISort, sortTasks } from "../../Components/Filter/Filter";
import "./ProjectsBook.css";
import Project from "./Project/Project";
import { IProject } from "./projects/typeProject";
import { useAppDispatch } from "../../hooks";

type IThemeProjects = "Приложения" | "Сайты" | "Проектирование" | "Компоненты";

const THEMES_PROJECTS = ["Сайты", "Приложения", "Проектирование", "Компоненты"];
const DEFAULT_SELECT_THEME_PROJECT: IThemeProjects = "Сайты";

function getFileName(type: IThemeProjects): string {
  if (type === "Сайты") {
    return "sites";
  }
  if (type === "Приложения") {
    return "application";
  }
  if (type === "Проектирование") {
    return "design";
  }
  if (type === "Компоненты") {
    return "components";
  }
  throw Error("Передан несуществующий тип проектов");
}

export default function ProjectsBook(): JSX.Element {
  const dispatch = useAppDispatch();

  const [selectThemeProjects, setSelectThemeProjects] =
    useState<IThemeProjects>(DEFAULT_SELECT_THEME_PROJECT);
  const [minLevel, setMinLevel] = useState<number>(0);
  const [maxLevel, setMaxLevel] = useState<number>(100);
  const [typeSort, setTypeSort] = useState<ISort>("levelMore");
  const [number, setNumber] = useState<number>(0);
  const [showProjects, setShowProjects] = useState<IProject[]>([]);

  // Для первой загрузки дефолтных проектов
  useEffect(() => {
    import(`./projects/${getFileName(DEFAULT_SELECT_THEME_PROJECT)}`)
      .then((obj) => {
        setShowProjects(obj.DATA);
      })
      .catch(() => {
        throw Error(
          `DEFAULT_SELECT_TYPE_TASKS, не существует такого типа задач`
        );
      });
  }, []);

  // Загрузка других типов проектов
  useEffect(() => {
    import(`./projects/${getFileName(selectThemeProjects)}`)
      .then((obj) => {
        setShowProjects(obj.DATA);
      })
      .catch(() => {
        throw Error(
          `Неправильно передан selectThemeProjects, было ${selectThemeProjects}`
        );
      });
  }, [selectThemeProjects, dispatch]);

  console.log(1);
  return (
    <div className="ProjectsBook">
      <Nav
        items={THEMES_PROJECTS}
        activeItem={selectThemeProjects}
        onSelect={setSelectThemeProjects}
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
      <div className="ProjectsBook__projects">
        {number
          ? showProjects.map((item, i) => {
              if (item.number === number) {
                return <Project {...item} key={i} />;
              }
            })
          : showProjects
              .sort((a, b) => sortTasks(typeSort, a, b))
              .map((item: IProject, i: number) => {
                if (item.level < maxLevel && item.level > minLevel) {
                  return <Project {...item} key={i} />;
                }
              })}
      </div>
    </div>
  );
}
