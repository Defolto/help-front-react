import React from 'react';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import InfoBook from './Pages/InfoBook/InfoBook';
import LearnBook from './Pages/LearnBook/LearnBook';
import ProjectsBook from './Pages/ProjectsBook/ProjectsBook';
import TasksBook from './Pages/TasksBook/TasksBook';

export default function App() {
  const isActiveLink = (isActive: boolean) => {
    return isActive ? 'App__navigationActiveLink' : '';
  };

  return (
    <div className="App">
      <header className="App__navigation">
        <Link className="App__navigationTitle" to="/">
          HelpFront
        </Link>
        <div className="App__navigationMenu d-col">
          <NavLink
            className={({ isActive }) => isActiveLink(isActive)}
            to="/infoBook"
          >
            Справочник
          </NavLink>
          <NavLink
            className={({ isActive }) => isActiveLink(isActive)}
            to="/LearnBook"
          >
            Учебник
          </NavLink>
          <NavLink
            className={({ isActive }) => isActiveLink(isActive)}
            to="/ProjectsBook"
          >
            Проекты
          </NavLink>
          <NavLink
            className={({ isActive }) => isActiveLink(isActive)}
            to="/TasksBook"
          >
            Задачи
          </NavLink>
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
    </div>
  );
}
