import "./review-list.style.scss";
import ReviewItem from "./review-item.component";

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
