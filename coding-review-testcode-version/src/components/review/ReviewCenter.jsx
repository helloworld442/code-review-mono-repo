import { styled } from "styled-components";
import { ReviewRank } from "./ReviewRank";
import { ReviewList } from "./ReviewList";

const ReviewCenter = () => {
  return (
    <StReviewCenter>
      <ReviewRank />
      <ReviewList />
    </StReviewCenter>
  );
};

const StReviewCenter = styled.div`
  width: 100%;
  height: auto;
  padding: 0 36px;
  margin-bottom: 36px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  gap: 36px;
`;

export { ReviewCenter };
