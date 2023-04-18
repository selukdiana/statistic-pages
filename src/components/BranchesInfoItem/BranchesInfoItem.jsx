import { useNavigate } from "react-router-dom";
import "./BranchesInfoItem.css";

export const BranchesInfoItem = () => {
  const navigate = useNavigate();
  const onBranchClickHandler = () => {
    navigate("infographics", { replace: false });
  };
  return (
    <div className="branches-info__item" onClick={onBranchClickHandler}>
      <div className="branches-info-item__content">
        <div className="item__img"></div>
        <h3 className="item__title">Thoughtful Design</h3>
        <div className="item__text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            euismod bibendum laoreet. Proin gravida dolor sit amet lacus
            accumsan et viverra.
          </p>
        </div>
      </div>
    </div>
  );
};
