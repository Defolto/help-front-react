import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import InfoBook from "./Pages/InfoBook/InfoBook";
import LearnBook from "./Pages/LearnBook/LearnBook";
import ProjectsBook from "./Pages/ProjectsBook/ProjectsBook";
import TasksBook from "./Pages/TasksBook/TasksBook";
import Alert from "./Components/Alert/Alert";
import Header from "./Components/Header/Header";

export default function App() {
  return (
    <div className="App">
      <Header />
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
