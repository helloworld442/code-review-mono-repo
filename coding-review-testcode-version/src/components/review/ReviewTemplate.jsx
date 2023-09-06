import { styled } from "styled-components";

const ReviewTemplate = ({ children }) => {
  return <StReviewTemplate>{children}</StReviewTemplate>;
};

const StReviewTemplate = styled.main`
  width: 100%;
  height: auto;
`;

export { ReviewTemplate };
