import { ICourse } from "../LearnBook";
import "./LineTheme.css";

type ILineTheme = {
  title: string;
  points: string[];
  theme: number;
  course: ICourse;
};

type Props = ILineTheme;

export default function LineTheme({
  title,
  points,
  theme,
  course,
}: Props): JSX.Element {
  return (
    <div className="LineTheme">
      <h2>{title}</h2>
      <div className="LineTheme__points">
        {points.map((title, point) => (
          <p
            onClick={() => {
              window.location.replace(
                `./?course=${course}&theme=${theme}&article=${point}`
              );
            }}
            className="LineTheme__point"
            key={`${theme}${point}`}
          >
            {theme}.{point} {title}
          </p>
        ))}
      </div>
    </div>
  );
}
