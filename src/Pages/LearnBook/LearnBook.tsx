import Nav from "../../Components/Nav/Nav";
import React, { useEffect, useState, Suspense } from "react";
import { showAlert } from "../../Components/Alert/AlertSlice";
import { useAppDispatch } from "../../hooks";
import "./LearnBook.css";
import LineTheme from "./LineTheme/LineTheme";

// Тип url-ов на данной странице
// ./LearnBook/?course={название курса из типа ICourse}&theme={номер темы}&article={номер статьи}
// Если указан только курс, без темы и статьи, то покажем все темы по курсу

export type ITheme = {
  title: string;
  points: string[];
};

export type ICourse = "Html" | "Css" | "JavaScript" | "Git" | "Figma";

const COURSES: ICourse[] = ["Html", "Css", "JavaScript", "Git", "Figma"];

function getCourse(): ICourse {
  const course = window.location.search.split("&")[0];
  const equals = course.indexOf("=");
  // @ts-ignore нужная строка гарантируется
  return course.substring(equals + 1, course.length);
}

export default function LearnBook(): JSX.Element {
  const [selectTheme, setSelectTheme] = useState<ICourse>(getCourse());
  const [infoTheme, setInfoTheme] = useState<ITheme[]>([]);
  const dispatch = useAppDispatch();

  const onSelectTheme = (theme: ICourse): void => {
    if (theme === selectTheme) {
      return;
    }

    import(`./themes/theme${theme}`)
      .then((obj) => {
        setInfoTheme(obj.default);
        setSelectTheme(theme);
        // Только заменяем url, но не переходим
        // Нужно на случай обновления страницы, чтобы осталась активная тема
        window.history.pushState(null, "", `./?course=${theme}`);
      })
      .catch(() => {
        dispatch(
          showAlert(
            "На данный момент, тема в разработке. Когда-нибудь она будет:)"
          )
        );
      });
  };

  // Запускается один раз, для загрузки тем по выбранному курсу
  useEffect(() => {
    import(`./themes/theme${selectTheme}`)
      .then((obj) => {
        setInfoTheme(obj.default);
      })
      .catch(() => {
        dispatch(
          showAlert(
            "На данный момент, тема в разработке. Когда-нибудь она будет:)"
          )
        );
      });
  }, []);

  const PageComponent = React.lazy(() => {
    const courses = window.location.search.split("&");

    if (courses.length > 1) {
      const activeTheme = courses[1].substring(6, courses[1].length);
      const activeArticle = courses[2].substring(8, courses[2].length);
      return import(
        `./pages/page${selectTheme}/${activeTheme}.${activeArticle}`
      );
    } else {
      return import(`./LinesTheme`);
    }
  });

  return (
    <div className="LearnBook">
      <Nav items={COURSES} activeItem={selectTheme} onSelect={onSelectTheme} />

      <Suspense fallback={<div>Загрузка...</div>}>
        <PageComponent infoTheme={infoTheme} course={selectTheme} />
      </Suspense>
    </div>
  );
}
