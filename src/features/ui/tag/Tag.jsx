import classNames from "classnames";
import "./Tag.scss";

const Tag = ({ title, color }) => {
  return (
    <span className="tag">
      <span className={classNames("tag-icon", color)}></span>
      <span className="tag-title">{title}</span>
    </span>
  );
};

export { Tag };
