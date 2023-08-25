import "./ReviewItem.scss";
import { ReactComponent as ArrowRight } from "../../../assets/arrow-right-solid.svg";
import { Link } from "react-router-dom";
import { Tag } from "../../ui";

const ReviewItem = ({ review }) => {
  return (
    <li className="review-item">
      {/* 리뷰 아이템 대제목  영역 */}
      <Link to={"/detail/" + review.id}>
        <div className="review-item-title">
          <span className="review-item-id">{review.id}</span>
          <h2>{review.title}</h2>
        </div>
      </Link>

      {/* 리뷰 아이템  댓글 영역*/}
      <div className="review-item-comment">
        <ArrowRight />
        <h3>이렇게 해보시는 거는 어떨까요?</h3>
      </div>

      <div className="review-item-tags">
        {review.tags.map((tag, i) => (
          <Tag key={i} title={tag} />
        ))}
      </div>
    </li>
  );
};

export default ReviewItem;
