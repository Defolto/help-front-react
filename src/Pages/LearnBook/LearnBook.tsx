import Nav from "../../Components/Nav/Nav";
import Preloader from "../../Components/Preloader/Preloader";
import React, { useEffect, useState, Suspense } from "react";
import { showAlert } from "../../Components/Alert/AlertSlice";
import { useAppDispatch } from "../../hooks";
import "./LearnBook.css";
import "./pages/Page.css";

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
  const dispatch = useAppDispatch();

  const [selectTheme, setSelectTheme] = useState<ICourse>(getCourse());
  const [infoTheme, setInfoTheme] = useState<ITheme[]>([]);

  const onSelectTheme = (theme: ICourse): void => {
    import(`./themes/theme${theme}`)
      .then((obj) => {
        setInfoTheme(obj.default);
        setSelectTheme(theme);
        window.location.replace(`./?course=${theme}`);
      })
      .catch(() => {
        dispatch(
          showAlert({
            content:
              "На данный момент, тема в разработке. Когда-нибудь она будет:)",
            size: {
              width: 300,
            },
          })
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
          showAlert({
            content:
              "На данный момент, тема в разработке. Когда-нибудь она будет:)",
            size: {
              width: 300,
            },
          })
        );
      });
  }, []);

  const courses = window.location.search.split("&");

  const PageComponent = React.lazy(() => {
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

      <Suspense fallback={<Preloader />}>
        {courses.length > 1 ? (
          <PageComponent />
        ) : (
          <PageComponent infoTheme={infoTheme} course={selectTheme} />
        )}
      </Suspense>
    </div>
  );
}
