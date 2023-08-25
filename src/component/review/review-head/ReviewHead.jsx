import { useState } from "react";
import "./ReviewHead.scss";
import { ReactComponent as Check } from "../../../assets/circle-check-regular.svg";
import classNames from "classnames";

const ReviewHead = () => {
  const [active, setActive] = useState(0);

  const onClickHeadTitle = (idx) => setActive(idx);

  return (
    <div className="review-head">
      <h2
        className={classNames("review-head-title", { active: active === 0 })}
        onClick={() => onClickHeadTitle(0)}
      >
        {active === 0 && <Check id="check-icon" />} 최신순
      </h2>
      <h2
        className={classNames("review-head-title", { active: active === 1 })}
        onClick={() => onClickHeadTitle(1)}
      >
        {active === 1 && <Check id="check-icon" />} 답변순
      </h2>
    </div>
  );
};

export { ReviewHead };
