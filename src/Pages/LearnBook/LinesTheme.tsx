import LineTheme from "./LineTheme/LineTheme";
import React from "react";
import { ICourse, ITheme } from "./LearnBook";

type Props = {
  infoTheme: ITheme[];
  course: ICourse;
};

export default function LinesTheme({ infoTheme, course }: Props) {
  return (
    <div className="LearnBook__lines">
      {infoTheme.map((item, index) => (
        <LineTheme
          title={item.title}
          points={item.points}
          theme={index}
          course={course}
        />
      ))}
    </div>
  );
}
