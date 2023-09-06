import { styled } from "styled-components";
import { getReviews } from "../../api/review";
import { useQuery } from "react-query";
import { Tag } from "../ui";

const ReviewBanner = () => {
  const { isLoading, isError, data, error } = useQuery("reviews", getReviews);

  console.log("[DEBUG] Review banner error : ", error);

  if (isLoading) return <div>loading....</div>;

  if (isError) return <div>errors...</div>;

  return (
    <StReviewBanner>
      <StReviewBannerTitle>최신에 들어온 글이에요!</StReviewBannerTitle>
      <StReviewBannerMenu>
        {data.slice(0, 3).map((item) => (
          <StReviewBannerItem>
            <h3 className="banner-item-title">
              <span className="banner-item-status">답변진행 중</span>
              <a href={"/detail/" + item.id}>{item.title}</a>
            </h3>
            <div className="banner-item-tags">
              {item.tags?.map((tag, i) => (
                <Tag key={i} title={tag} />
              ))}
            </div>
            <div className="banner-item-content">
              <h2 className="banner-item-problem">
                <span>문제상황</span>
                {item.problem}
              </h2>
              <h2 className="banner-item-question">
                <span>궁금한 점</span>
                {item.question}
              </h2>
            </div>
            <div className="banner-item-info">
              <h6>
                답변 <span>0</span>
              </h6>
              <h6>
                추천 <span>1</span>
              </h6>
              <h6>
                조회 <span>2</span>
              </h6>
            </div>
          </StReviewBannerItem>
        ))}
      </StReviewBannerMenu>
    </StReviewBanner>
  );
};

const StReviewBanner = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 108px;
`;

const StReviewBannerTitle = styled.h1`
  width: calc(100% - 72px);
  margin: 36px auto;
  font-size: 2rem;
  font-weight: 400;
  color: #333;
`;

const StReviewBannerMenu = styled.ul`
  width: calc(100% - 72px);
  height: auto;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 36px;
`;

const StReviewBannerItem = styled.li`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 24px;
  box-sizing: border-box;
  border: 2px solid #bbb;
  border-radius: 8px;
  background: #fff;
  cursor: pointer;
  transition: all 0.8s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  .banner-item-title {
    width: 350px;
    margin-bottom: 18px;
    font-size: 1.6rem;
    font-weight: 400;
    color: #333;
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;

    &:hover {
      color: rgb(64, 58, 107, 0.5);
    }
  }

  .banner-item-status {
    display: inline-block;
    padding: 10px 18px;
    margin-right: 12px;
    border: 5px solid #e8e8e8;
    border-radius: 12px;
    font-size: 1.2rem;
    font-weight: 400;
    color: #eee;
    background: rgb(64, 58, 107, 0.8);
  }

  .banner-item-tags {
    margin-bottom: 18px;
    display: flex;
    gap: 12px;
  }

  .banner-item-content {
    margin-bottom: 36px;
  }

  .banner-item-problem,
  .banner-item-question {
    font-size: 1.15rem;
    font-weight: 400;
    color: #333;
    line-height: 2rem;
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;

    span {
      display: block;
      font-size: 1.2rem;
      font-weight: 400;
      color: rgb(64, 58, 107, 0.5);
    }
  }

  .banner-item-info {
    position: absolute;
    bottom: 24px;
    right: 24px;
    display: flex;
    justify-content: flex-end;
    gap: 12px;
    font-size: 1.2rem;

    span {
      color: rgb(64, 58, 107, 0.8);
    }
  }
`;

export { ReviewBanner };
