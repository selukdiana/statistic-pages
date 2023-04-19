import { useNavigate } from "react-router-dom";
import "./InfographicsGridElement.css";

export const InfographicsGridElement = ({ title, info = "Lorem" }) => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate("info", { replace: true });
  };
  return (
    <div className="infographics-grid-element" onClick={onClickHandler}>
      <div className="grid-element__content">
        <h4 className="grid-element__title">{title}</h4>
        <div className="grid-element__info">
          <p>{info}</p>
        </div>
      </div>
    </div>
  );
};
