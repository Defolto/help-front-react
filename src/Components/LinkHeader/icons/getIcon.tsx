import Info from "./Info";
import Projects from "./Projects";
import Tasks from "./Tasks";
import Learn from "./Learn";

export default function getIcon(type: string): JSX.Element {
  if (type === "info") {
    return <Info />;
  } else if (type === "projects") {
    return <Projects />;
  } else if (type === "tasks") {
    return <Tasks />;
  } else if (type === "learn") {
    return <Learn />;
  } else {
    return <div>Нет такой иконки</div>;
  }
}
