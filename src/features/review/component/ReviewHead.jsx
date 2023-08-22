import "./ReviewHead.scss";
import { Tag } from "../../ui";

const ReviewHead = () => {
  return (
    <div className="review-head">
      <Tag title="JavaScript" color="yellow" />
      <Tag title="NodeJs" color="green" />
      <Tag title="ReactJs" color="blue" />
    </div>
  );
};

export { ReviewHead };
