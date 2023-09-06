import { styled } from "styled-components";
import { ReactComponent as Heart } from "../../assets/heart-solid.svg";

const ReviewLikes = ({ data }) => {
  return (
    <StReviewLikes>
      <Heart />
      <h4>0</h4>
    </StReviewLikes>
  );
};

const StReviewLikes = styled.div`
  position: fixed;
  top: 70%;
  right: 10%;
  width: 70px;
  height: 100px;
  padding: 12px 0;
  box-sizing: border-box;
  box-shadow: 12px 12px 40px #dbdbdb;
  border: 2px solid #e8e8e8;
  border-radius: 12px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;

  svg {
    width: 2.4rem;
    height: 2.4rem;
    fill: #bbb;

    &:hover {
      fill: rgb(64, 58, 107, 0.8);
    }
  }

  h4 {
    font-size: 1.15rem;
    font-weight: 400;
    color: rgb(64, 58, 107, 0.8);
  }
`;

export { ReviewLikes };
