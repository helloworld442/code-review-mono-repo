import "./ReviewHead.scss";
import { Tag } from "../../ui";

const ReviewHead = () => {
  return (
    <div className="review-head">
      <Tag title="JavaScript" color="yellow" size="large" />
      <Tag title="NodeJs" color="green" size="large" />
      <Tag title="ReactJs" color="blue" size="large" />
    </div>
  );
};

export { ReviewHead };
