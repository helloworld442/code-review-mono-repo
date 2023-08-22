import "./ReviewHead.scss";
import { Tag } from "../../ui";

const ReviewHead = () => {
  return (
    <div className="review-head">
      <h2 className="review-head-title">기술 스택</h2>
      <Tag title="JavaScript" color="yellow" size="large" />
      <Tag title="NodeJs" color="green" size="large" />
      <Tag title="ReactJs" color="blue" size="large" />
    </div>
  );
};

export { ReviewHead };
