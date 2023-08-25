import { Tag } from "../../ui";
import "./ReviewTag.scss";

const ReviewTag = () => {
  return (
    <div className="review-tag">
      <h2 className="review-tag-title">인기 태그</h2>
      <div className="review-tag-content">
        <Tag title="js" />
        <Tag title="react" />
        <Tag title="node" />
        <Tag title="node 우엑" />
      </div>
    </div>
  );
};

export { ReviewTag };
