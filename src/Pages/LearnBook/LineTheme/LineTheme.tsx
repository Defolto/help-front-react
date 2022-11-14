import { ICourse } from "../LearnBook";
import "./LineTheme.css";

type ILineTheme = {
  title: string;
  points: string[];
  index: number;
  course: ICourse;
};

type Props = ILineTheme;

export default function LineTheme({
  title,
  points,
  index,
  course,
}: Props): JSX.Element {
  return (
    <div className="LineTheme">
      <h2>{title}</h2>
      <div className="LineTheme__points">
        {points.map((point, index) => (
          <p className="LineTheme__point" key={index}>
            {point}
          </p>
        ))}
      </div>
    </div>
  );
}
