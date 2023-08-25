import "./ReviewItem.scss";
import { ReactComponent as ArrowRight } from "../../../assets/arrow-right-solid.svg";
import { Tag } from "../../ui";

const ReviewItem = ({ review }) => {
  return (
    <li className="review-item">
      {/* 리뷰 아이템 대제목  영역 */}
      <a href={"/detail/" + review.id}>
        <div className="review-item-title">
          <span className="review-item-id">답변진행 중</span>
          <h2>{review.title}</h2>
        </div>
      </a>

      {/* 리뷰 아이템  댓글 영역*/}
      <div className="review-item-comment">
        <ArrowRight />
        <h3>이렇게 해보시는 거는 어떨까요?</h3>
      </div>

      {/* 리뷰 아이템 태그 영역 */}
      <div className="review-item-tags">
        {review.tags.map((tag, i) => (
          <Tag key={i} title={tag} />
        ))}
      </div>
    </li>
  );
};

export default ReviewItem;
