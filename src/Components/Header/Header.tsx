import React from "react";
import { Link } from "react-router-dom";
import LinkHeader from "../LinkHeader/LinkHeader";
import "./Header.css";

export default function Header() {
  return (
    <header className="Header__navigation">
      <Link className="Header__navigationTitle" to="/">
        HelpFront
      </Link>
      <div className="Header__navigationMenu d-col">
        <LinkHeader to="/infoBook" icon="info" text="Справочник" />
        <LinkHeader to="/LearnBook/?course=Html" icon="learn" text="Учебник" />
        <LinkHeader to="/ProjectsBook" icon="projects" text="Проекты" />
        <LinkHeader to="/TasksBook" icon="tasks" text="Задачи" />
      </div>
      <div className="Header__navigationOptions d-col mt-auto">
        <p>Помощь</p>
        <p>Настройки</p>
        <p>Обратная связь</p>
      </div>
    </header>
  );
}
