import "./ReviewItem.scss";
import { Tag } from "../../ui";
import { ReactComponent as Eye } from "../../../assets/eye-solid.svg";
import { ReactComponent as Thumbs } from "../../../assets/thumbs-up-solid.svg";

const ReviewItem = () => {
  return (
    <li className="review-item">
      {/* 리뷰 아이템 아이콘 영역 */}
      <span className="review-item-icon"></span>

      {/* 리뷰 아이템 테그 영역 */}
      <span className="review-item-tag">
        <Tag title="JavaScript" color="yellow" size="small" />
        <Tag title="ReactJs" color="blue" size="small" />
      </span>

      {/* 리뷰 아이템 대제목 , 소제목 영역 */}
      <span className="review-item-title">
        <h2>리엑트 코드 리뷰입니다.</h2>
        <h4>많은 참여 부탁드릴게용!</h4>
      </span>

      {/* 리뷰 아이템 정보 영역 */}
      <span className="review-item-info">
        <span className="item-user-name">김민승</span>
        <span className="item-user-social">
          <Eye className="item-icon" /> 0
          <Thumbs className="item-icon" /> 0
        </span>
      </span>
    </li>
  );
};

export default ReviewItem;
