import Nav from "../../Components/Nav/Nav";
import { useEffect, useState } from "react";
import { showAlert } from "../../Components/Alert/AlertSlice";
import { useAppDispatch } from "../../hooks";

export type Theme = {
  title: string;
  points: string[];
};

export default function LearnBook(): JSX.Element {
  const [selectTheme, setSelectTheme] = useState<string>("Html");
  const [theme, setTheme] = useState<Theme[]>([]);
  const dispatch = useAppDispatch();

  const onSelectTheme = (theme: string): void => {
    if (theme === selectTheme) {
      return;
    }

    setSelectTheme(theme);
  };

  useEffect(() => {
    import(`./themes/theme${selectTheme}`)
      .then((obj) => {
        setTheme(obj.default);
      })
      .catch((e) => {
        dispatch(showAlert("Проверка, что работает"));
      });
  }, [selectTheme]);

  return (
    <div className="LearnBook">
      <Nav
        items={["Html", "Css", "JavaScript", "Git", "Figma"]}
        activeItem={selectTheme}
        onSelect={onSelectTheme}
      />
      <div>
        {theme.map((item, index) => (
          <p key={index}>{item.title}</p>
        ))}
      </div>
    </div>
  );
}
