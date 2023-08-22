import "./ReviewList.scss";
import ReviewItem from "./ReviewItem";

const ReviewList = () => {
  return (
    <ul className="review-list">
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
    </ul>
  );
};

export { ReviewList };
