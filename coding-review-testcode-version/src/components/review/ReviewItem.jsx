import { styled } from "styled-components";
import { Tag } from "../ui";
import { ReactComponent as ArrowRight } from "../../assets/arrow-right-solid.svg";

const ReviewItem = ({ review }) => {
  return (
    <StReviewItem>
      <StReviewItemTitle>
        <span className="review-item-status">답변진행 중</span>
        <a href={"/detail/" + review.id}>{review.title}</a>
      </StReviewItemTitle>
      <StReviewItemComment>
        <ArrowRight />
        이렇게 해보시는 것은 어떨까요?
      </StReviewItemComment>
      <StReviewItemTags>
        {review.tags?.map((tag, i) => (
          <Tag key={i} title={tag} />
        ))}
      </StReviewItemTags>
    </StReviewItem>
  );
};

const StReviewItem = styled.li`
  position: relative;
  padding: 12px;
  box-sizing: border-box;
  border: 2px solid #bbb;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.8s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const StReviewItemTitle = styled.h2`
  width: 450px;
  margin-bottom: 18px;
  font-size: 1.2rem;
  font-weight: 400;
  color: #333;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;

  &:hover {
    color: rgb(64, 58, 107, 0.8);
  }

  .review-item-status {
    display: inline-block;
    padding: 8px 12px;
    margin-right: 12px;
    border: 3px solid #e8e8e8;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 400;
    color: #eee;
    background: rgb(64, 58, 107, 0.8);
  }
`;

const StReviewItemComment = styled.h3`
  width: 300px;
  margin-bottom: 18px;
  font-size: 0.925rem;
  font-weight: 400;
  color: #888;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  svg {
    width: 1rem;
    height: 1rem;
    margin-right: 12px;
    fill: #888;
  }
`;

const StReviewItemTags = styled.div`
  display: flex;
  gap: 12px;
`;

export { ReviewItem };
