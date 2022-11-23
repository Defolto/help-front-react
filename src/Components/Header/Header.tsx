import React from "react";
import { Link } from "react-router-dom";
import LinkHeader from "../LinkHeader/LinkHeader";
import "./Header.css";
export default function Header(): JSX.Element {
  const [headerProminence, setHeaderProminence] = React.useState<boolean>(true);
  let arrowRotate: string = "rotateZ(180deg)";
  let headerWidth: string = "200px";
  if (!headerProminence) {
    arrowRotate = "rotateZ(0deg)";
    headerWidth = "100px";
  }
  return (
    <header className="Header__navigation" style={{ width: `${headerWidth}` }}>
      <div className="Header__navigationTitleWrap">
        <Link className="Header__navigationTitle" to="/">
          {headerProminence ? "HelpFront" : "HF"}
        </Link>
        <svg
          className="Header__navigationTitleSvg"
          style={{ transform: `${arrowRotate}` }}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="24px"
          height="24px"
          viewBox="0 0 96 96"
          onClick={() => setHeaderProminence(!headerProminence)}
        >
          <g>
            <path
              d="M12,52h62.344L53.172,73.172c-1.562,1.562-1.562,4.094,0,5.656c1.562,1.562,4.095,1.562,5.657,0l28-28
			c1.562-1.562,1.562-4.095,0-5.656l-28-28C58.048,16.391,57.024,16,56,16c-1.023,0-2.047,0.391-2.828,1.172
			c-1.562,1.562-1.562,4.095,0,5.656L74.344,44H12c-2.209,0-4,1.791-4,4S9.791,52,12,52z"
            />
          </g>
        </svg>
      </div>

      <div
        className="Header__navigationMenu d-col"
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
        className="Header__navigationOptions d-col mt-auto"
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
        {/*{headerProminence ? (*/}
        {/*  <div>*/}
        {/*    <p>Помощь</p>*/}
        {/*    <p>Настройки</p>*/}
        {/*    <p>Обратная связь</p>*/}
        {/*  </div>*/}
        {/*) : (*/}
        {/*  ""*/}
        {/*)}*/}
        <LinkHeader
          to="/"
          icon="help"
          text={headerProminence ? "Помощь" : ""}
        />
        <LinkHeader
          to="/TasksBook"
          icon="settings"
          text={headerProminence ? "Настройки" : ""}
        />
        <LinkHeader
          to="/TasksBook"
          icon="feedback"
          text={headerProminence ? "Контакты" : ""}
        />
      </div>
    </header>
  );
}
