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

  const slider = useRef<HTMLDivElement | null>(null);
  const from = useRef<HTMLDivElement | null>(null);
  const to = useRef<HTMLDivElement | null>(null);

  const onChangeValue = (e: any, ball: "from" | "to"): void => {
    if (!active || !slider.current) {
      return;
    }

    if (ball === "from" && from.current) {
      const leftFrom = from.current.getBoundingClientRect().left;
      const range = e.pageX - leftFrom - 5;
      setLocalFrom((prev) => prev + range);
      changeFrom(Math.round(localFrom));
    }
    if (ball === "to" && to.current) {
      const leftTo = to.current.getBoundingClientRect().left;
      const range = e.pageX - leftTo - 5;
      setLocalTo((prev) => prev + range);
      changeTo(Math.round(localTo));
    }
  };

  const stopChange = () => {
    setActive(false);
  };

  return (
    <div className="Slider" style={{ width: width + "px" }} ref={slider}>
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
          className="Slider__ball"
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
