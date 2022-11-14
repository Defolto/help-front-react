import Nav from "../../Components/Nav/Nav";
import { useState } from "react";
import { showAlert } from "../../Components/Alert/AlertSlice";
import { useAppDispatch } from "../../hooks";
import "./LearnBook.css";
import LineTheme from "./LineTheme/LineTheme";
import defaultTheme from "./themes/themeHtml";

export type ITheme = {
  title: string;
  points: string[];
};

export type ICourse = "Html" | "Css" | "JavaScript" | "Git" | "Figma";

const COURSES: ICourse[] = ["Html", "Css", "JavaScript", "Git", "Figma"];
const DEFAULT_SELECT_THEME: ICourse = "Html";

export default function LearnBook(): JSX.Element {
  const [selectTheme, setSelectTheme] = useState<ICourse>(DEFAULT_SELECT_THEME);
  const [infoTheme, setInfoTheme] = useState<ITheme[]>(defaultTheme);
  const dispatch = useAppDispatch();

  const onSelectTheme = (theme: ICourse): void => {
    if (theme === selectTheme) {
      return;
    }

    import(`./themes/theme${theme}`)
      .then((obj) => {
        setInfoTheme(obj.default);
        setSelectTheme(theme);
      })
      .catch((e) => {
        dispatch(
          showAlert(
            "На данный момент, тема в разработке. Когда-нибудь она будет:)"
          )
        );
      });
  };

  return (
    <div className="LearnBook">
      <Nav items={COURSES} activeItem={selectTheme} onSelect={onSelectTheme} />
      <div className="LearnBook__lines">
        {infoTheme.map((item, index) => (
          <LineTheme
            title={item.title}
            points={item.points}
            index={index}
            course={selectTheme}
          />
        ))}
      </div>
    </div>
  );
}
