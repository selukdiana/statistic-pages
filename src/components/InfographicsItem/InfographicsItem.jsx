import "./InfographicsItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const InfographicsItem = ({ title, subtitle }) => {
  return (
    <div className="infographics-item">
      <div className="infographics__img"></div>
      <div className="infographics__info">
        <h4>{title}</h4>
        <h3>{subtitle}</h3>
      </div>
    </div>
  );
};
