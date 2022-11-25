import React from "react";
type Props = {
  headerProminence: boolean;
  setHeaderProminence: (boolean: boolean) => void;
};

export default function Arrow({
  headerProminence,
  setHeaderProminence,
}: Props): JSX.Element {
  return (
    <svg
      className="Header__TitleSvg"
      style={
        headerProminence
          ? { transform: "rotateZ(0deg)" }
          : { transform: "rotateZ(180deg)" }
      }
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="24px"
      height="24px"
      viewBox="0 0 96 96"
      onClick={() => {
        console.log(headerProminence);
        console.log(localStorage.getItem("miniHeaderMode"));
        localStorage.setItem("miniHeaderMode", "true");
        console.log(localStorage.getItem("miniHeaderMode"));
      }}
    >
      <g>
        <path
          d="M12,52h62.344L53.172,73.172c-1.562,1.562-1.562,4.094,0,5.656c1.562,1.562,4.095,1.562,5.657,0l28-28
			c1.562-1.562,1.562-4.095,0-5.656l-28-28C58.048,16.391,57.024,16,56,16c-1.023,0-2.047,0.391-2.828,1.172
			c-1.562,1.562-1.562,4.095,0,5.656L74.344,44H12c-2.209,0-4,1.791-4,4S9.791,52,12,52z"
        />
      </g>
    </svg>
  );
}
