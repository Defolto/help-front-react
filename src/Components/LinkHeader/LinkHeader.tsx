import "./LinkHeader.css";
import { NavLink } from "react-router-dom";
import getIcon from "./icons/getIcon";

type Props = {
  to: string;
  icon: string;
  text: string;
};

export default function LinkHeader({ to, icon, text }: Props): JSX.Element {
  const isActiveLink = (isActive: boolean) => {
    return isActive ? "LinkHeader_activeLink" : "";
  };

  return (
    <div className="LinkHeader">
      {getIcon(icon)}
      <NavLink className={({ isActive }) => isActiveLink(isActive)} to={to}>
        {text}
      </NavLink>
    </div>
  );
}
