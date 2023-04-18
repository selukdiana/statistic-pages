import "./InfographicsItem.css";
import { BiBulb } from "react-icons/bi";

export const InfographicsItem = ({ title, subtitle, children }) => {
  return (
    <div className="infographics-item">
      <div className="infographics__img">{children}</div>
      <div className="infographics__info">
        <h4>{title}</h4>
        <h3>{subtitle}</h3>
      </div>
    </div>
  );
};
