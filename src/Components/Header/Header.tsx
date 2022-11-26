import React from "react";
import { Link } from "react-router-dom";
import LinkHeader from "../LinkHeader/LinkHeader";
import { useState } from "react";
import "./Header.css";
import Arrow from "./icons/Arrow";
export default function Header(): JSX.Element {
  const [miniMode, setMiniMode] = useState<boolean>(
    !!localStorage.getItem("miniHeaderMode")
  );
  return (
    <header className={`Header ${miniMode ? "Header_mini" : ""}`}>
      <div className="Header__TitleWrap">
        <Link className="Header__Title" to="/">
          {miniMode ? "HF" : "HelpFront"}
        </Link>
        <Arrow headerProminence={miniMode} setHeaderProminence={setMiniMode} />
      </div>
      <div
        className={`Header__Menu d-col ${miniMode ? "Header__Menu_mini" : ""}`}
      >
        <LinkHeader
          to="/infoBook"
          icon="info"
          text={miniMode ? "" : "Справочник"}
        />
        <LinkHeader
          to="/LearnBook/?course=Html"
          icon="learn"
          text={miniMode ? "" : "Учебник"}
        />
        <LinkHeader
          to="/ProjectsBook"
          icon="projects"
          text={miniMode ? "" : "Проекты"}
        />
        <LinkHeader
          to="/TasksBook"
          icon="tasks"
          text={miniMode ? "" : "Задачи"}
        />
      </div>
      <div
        className={`Header__Options d-col mt-auto ${
          miniMode ? "Header__Options_mini" : ""
        }`}
      >
        <LinkHeader to="/" icon="help" text={miniMode ? "" : "Помощь"} />
        <LinkHeader to="/" icon="settings" text={miniMode ? "" : "Настройки"} />
        <LinkHeader
          to="/"
          icon="feedback"
          text={miniMode ? "" : "Обратная связь"}
        />
      </div>
    </header>
  );
}
