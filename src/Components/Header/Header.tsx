import React from "react";
import { Link } from "react-router-dom";
import LinkHeader from "../LinkHeader/LinkHeader";
import { useState } from "react";
import "./Header.css";
import Arrow from "./icons/Arrow";
export default function Header(): JSX.Element {
  const [headerProminence, setHeaderProminence] = useState<boolean>(true);
  return (
    <header className={headerProminence ? "Header" : "Header Header__mini"}>
      <div className="Header__TitleWrap">
        <Link className="Header__Title" to="/">
          {headerProminence ? "HelpFront" : "HF"}
        </Link>
        <Arrow
          headerProminence={headerProminence}
          setHeaderProminence={setHeaderProminence}
        />
      </div>
      <div
        className="Header__Menu d-col"
        style={
          headerProminence
            ? {}
            : {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }
        }
      >
        <LinkHeader
          to="/infoBook"
          icon="info"
          text={headerProminence ? "Справочник" : ""}
        />
        <LinkHeader
          to="/LearnBook/?course=Html"
          icon="learn"
          text={headerProminence ? "Учебник" : ""}
        />
        <LinkHeader
          to="/ProjectsBook"
          icon="projects"
          text={headerProminence ? "Проекты" : ""}
        />
        <LinkHeader
          to="/TasksBook"
          icon="tasks"
          text={headerProminence ? "Задачи" : ""}
        />
      </div>
      <div
        className="Header__Options d-col mt-auto"
        style={
          headerProminence
            ? {}
            : {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }
        }
      >
        <LinkHeader
          to="/"
          icon="help"
          text={headerProminence ? "Помощь" : ""}
        />
        <LinkHeader
          to="/"
          icon="settings"
          text={headerProminence ? "Настройки" : ""}
        />
        <LinkHeader
          to="/"
          icon="feedback"
          text={headerProminence ? "Обратная связь" : ""}
        />
      </div>
    </header>
  );
}
