import { styled } from "styled-components";

const ReviewRank = () => {
  return (
    <StReviewRank>
      <StReviewRankTitle>유저 랭킹</StReviewRankTitle>
      <StReviewRankMenu>
        <StReviewRankItem>
          <span className="rank-item-profile"></span>
          <h4 className="rank-item-name">김민승</h4>
        </StReviewRankItem>
      </StReviewRankMenu>
    </StReviewRank>
  );
};

const StReviewRank = styled.div`
  flex: 1;
  height: 700px;
  padding: 24px;
  box-sizing: border-box;
  border: 2px solid #bbb;
  border-radius: 4px;
  background: #fff;
`;

const StReviewRankTitle = styled.h2`
  margin-bottom: 24px;
  font-size: 1.2rem;
  font-weight: 400;
  color: #333;
`;

const StReviewRankMenu = styled.ul`
  width: 100%;
  height: calc(100% - 46px);
`;

const StReviewRankItem = styled.li`
  position: relative;
  width: 100%;
  margin: 24px 0;

  &:first-child {
    margin-top: 0;
  }

  .rank-item-profile {
    display: inline-block;
    width: 36px;
    height: 36px;
    margin-right: 12px;
    border: 2px solid #eee;
    border-radius: 100%;
    background: #403a6b;
  }
  .rank-item-name {
    position: absolute;
    top: 50%;
    font-size: 1.2rem;
    font-weight: 400;
    color: #333;
    display: inline-block;
    transform: translateY(-50%);
  }
`;

export { ReviewRank };
