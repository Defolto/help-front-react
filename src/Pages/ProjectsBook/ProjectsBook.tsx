import Nav from "../../Components/Nav/Nav";
import { useState } from "react";
import { ITask } from "../TasksBook/tasks/typeTask";
import Filter, { ISort } from "../../Components/Filter/Filter";
import "./ProjectsBook.css";
import Project from "./Project/Project";

type IThemeProjects = "Приложения" | "Сайты" | "Проектирование" | "Компоненты";

const THEMES_PROJECTS = ["Сайты", "Приложения", "Проектирование", "Компоненты"];
const DEFAULT_SELECT_THEME_PROJECT: IThemeProjects = "Сайты";

export default function ProjectsBook(): JSX.Element {
  const [selectThemeProjects, setSelectThemeProjects] =
    useState<IThemeProjects>(DEFAULT_SELECT_THEME_PROJECT);
  const [minLevel, setMinLevel] = useState<number>(0);
  const [maxLevel, setMaxLevel] = useState<number>(100);
  const [typeSort, setTypeSort] = useState<ISort>("levelMore");
  const [number, setNumber] = useState<number>(0);
  const [showProjects, setShowProjects] = useState<ITask[]>([]);

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
      <div className="ProjectsBook__list">
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
}
