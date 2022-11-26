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
      <NavLink className={({ isActive }) => isActiveLink(isActive)} to={to}>
        {getIcon(icon)}
        <p>{text}</p>
      </NavLink>
    </div>
  );
}
