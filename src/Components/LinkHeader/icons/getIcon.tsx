import Info from "./Info";
import Projects from "./Projects";
import Tasks from "./Tasks";
import Learn from "./Learn";
import Feedback from "./Feedback";
import Settings from "./Settings";
import Help from "./Help";

export default function getIcon(type: string): JSX.Element {
  if (type === "info") {
    return <Info />;
  } else if (type === "projects") {
    return <Projects />;
  } else if (type === "tasks") {
    return <Tasks />;
  } else if (type === "learn") {
    return <Learn />;
  } else if (type === "feedback") {
    return <Feedback />;
  } else if (type === "settings") {
    return <Settings />;
  } else if (type === "help") {
    return <Help />;
  } else {
    throw Error("Вызвана несуществующая иконка");
  }
}
