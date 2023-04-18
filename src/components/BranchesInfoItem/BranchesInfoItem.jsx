import { useNavigate } from "react-router-dom";
import "./BranchesInfoItem.css";

export const BranchesInfoItem = ({ title, children }) => {
  const navigate = useNavigate();
  const onBranchClickHandler = () => {
    navigate("infographics", { replace: false });
  };
  return (
    <div className="branches-info__item" onClick={onBranchClickHandler}>
      <div className="branches-info-item__content">
        <div className="item__img">{children}</div>
        <h3 className="item__title">{title}</h3>
        <div className="item__text">
          <p>
            Официальная статистическая информация, сформированная в соответствии
            с программой статистических работ, распространяется всем
            пользователям.
          </p>
        </div>
      </div>
    </div>
  );
};
