import "./Tag.scss";

const Tag = ({ title }) => {
  return (
    <span className="tag">
      <span className="tag-title">#{title}</span>
    </span>
  );
};

export { Tag };
