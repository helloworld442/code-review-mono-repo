import { useState } from "react";
import "./ReviewHead.scss";
import { ReactComponent as ArrowDown } from "../../../assets/arrow-down-solid.svg";

const ReviewHead = () => {
  const themeOptions = ["최신순", "답변순"];
  const [select, setSelect] = useState(themeOptions[0]);
  const [isOpen, setIsOpen] = useState(false);

  const onOpenSelect = () => setIsOpen(true);

  const onCloseSelect = (item) => {
    setIsOpen(false);
    setSelect(item);
  };

  return (
    <div className="review-head">
      <h2 className="review-head-title">{select}</h2>
      <div className="review-head-select">
        <h2 className="head-select-trigger" onClick={onOpenSelect}>
          {select} <ArrowDown id="arrow-down-icon" />
        </h2>
        {isOpen && (
          <ul className="head-select-content">
            {themeOptions.map((theme, i) => (
              <li key={i} onClick={() => onCloseSelect(theme)}>
                {theme}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export { ReviewHead };
