import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import InfoBook from "./Pages/InfoBook/InfoBook";
import LearnBook from "./Pages/LearnBook/LearnBook";
import ProjectsBook from "./Pages/ProjectsBook/ProjectsBook";
import TasksBook from "./Pages/TasksBook/TasksBook";
import Alert from "./Components/Alert/Alert";
import LinkHeader from "./Components/LinkHeader/LinkHeader";

export default function App() {
  return (
    <div className="App">
      <header className="App__navigation">
        <Link className="App__navigationTitle" to="/">
          HelpFront
        </Link>
        <div className="App__navigationMenu d-col">
          <LinkHeader to="/infoBook" icon="info" text="Справочник" />
          <LinkHeader
            to="/LearnBook/?course=Html"
            icon="learn"
            text="Учебник"
          />
          <LinkHeader to="/ProjectsBook" icon="projects" text="Проекты" />
          <LinkHeader to="/TasksBook" icon="tasks" text="Задачи" />
        </div>
        <div className="App__navigationOptions d-col mt-auto">
          <p>Помощь</p>
          <p>Настройки</p>
          <p>Обратная связь</p>
        </div>
      </header>
      <main className="App__mainContent">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/InfoBook" element={<InfoBook />} />
          <Route path="/LearnBook" element={<LearnBook />} />
          <Route path="/ProjectsBook" element={<ProjectsBook />} />
          <Route path="/TasksBook" element={<TasksBook />} />
        </Routes>
      </main>
      <Alert />
    </div>
  );
}
