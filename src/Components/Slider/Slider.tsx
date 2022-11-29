import "./Slider.css";
import { useRef, useState } from "react";

type Props = {
  width: number;
  valueFrom: number;
  valueTo: number;
  changeFrom: (value: number) => void;
  changeTo: (value: number) => void;
};

export default function Slider({
  width,
  valueFrom,
  valueTo,
  changeFrom,
  changeTo,
}: Props): JSX.Element {
  const [localFrom, setLocalFrom] = useState<number>(valueFrom);
  const [localTo, setLocalTo] = useState<number>(valueTo);
  const [active, setActive] = useState<boolean>(false);

  const from = useRef<HTMLDivElement | null>(null);
  const to = useRef<HTMLDivElement | null>(null);

  const onChangeValue = (e: any, ball: "from" | "to"): void => {
    if (!active) {
      return;
    }
    if (localTo < localFrom) {
      changeFrom(Math.round(localTo));
      changeTo(Math.round(localFrom));
      setLocalTo(localFrom);
    } else if (ball === "from" && from.current) {
      const leftFrom = from.current.getBoundingClientRect().left;
      const range = e.pageX - leftFrom - 5;
      setLocalFrom((prev) => prev + range);
      if (localFrom < 0) {
        changeFrom(0);
      } else if (localFrom > 100) {
        changeFrom(100);
      } else {
        changeFrom(Math.round(localFrom));
      }
    } else if (ball === "to" && to.current) {
      const leftTo = to.current.getBoundingClientRect().left;
      const range = e.pageX - leftTo - 5;
      setLocalTo((prev) => prev + range);
      changeTo(Math.round(localTo));
      if (localTo < 0) {
        changeTo(0);
      } else if (localTo > 100) {
        changeTo(100);
      } else {
        changeTo(Math.round(localTo));
      }
    }
  };

  const stopChange = () => {
    setActive(false);
  };

  return (
    <div className="Slider" style={{ width: width + "px" }}>
      <div className="Slider__from" style={{ width: localFrom + "%" }}>
        <div
          ref={from}
          className="Slider__ball"
          onMouseDown={() => setActive(true)}
          onMouseOut={() => stopChange()}
          onMouseUp={() => stopChange()}
          onMouseMove={(e) => {
            onChangeValue(e, "from");
          }}
        ></div>
      </div>
      <div className="Slider__to" style={{ width: 100 - localTo + "%" }}>
        <div
          ref={to}
          className="Slider__ball red"
          onMouseDown={() => setActive(true)}
          onMouseOut={() => stopChange()}
          onMouseUp={() => stopChange()}
          onMouseMove={(e) => {
            onChangeValue(e, "to");
          }}
        ></div>
      </div>
    </div>
  );
}
