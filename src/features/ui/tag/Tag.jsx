import classNames from "classnames";
import "./Tag.scss";

const Tag = ({ title, color, size }) => {
  return (
    <span className={classNames("tag", size)}>
      <span className={classNames("tag-icon", color, size)}></span>
      <span className={classNames("tag-title", size)}>{title}</span>
    </span>
  );
};

export { Tag };
