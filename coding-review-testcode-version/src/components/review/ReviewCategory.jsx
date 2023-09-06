import { css, styled } from "styled-components";
import { useState } from "react";

const ReviewCategory = () => {
  const [category, setCategory] = useState(0);

  return (
    <StReviewCategory>
      <ReviewCategoryTitle onClick={() => setCategory(0)} $active={category === 0}>
        최신순
      </ReviewCategoryTitle>
      <ReviewCategoryTitle onClick={() => setCategory(1)} $active={category === 1}>
        답변순
      </ReviewCategoryTitle>
      <ReviewCategoryTitle onClick={() => setCategory(2)} $active={category === 2}>
        조회순
      </ReviewCategoryTitle>
    </StReviewCategory>
  );
};

const StReviewCategory = styled.div`
  margin-bottom: 36px;
  display: flex;
  justify-content: flex-start;
  gap: 36px;
`;

const ReviewCategoryTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 400;
  color: rgb(64, 58, 107, 0.5);
  cursor: pointer;

  ${(props) =>
    props.$active &&
    css`
      color: #333;
    `}
`;

export { ReviewCategory };
