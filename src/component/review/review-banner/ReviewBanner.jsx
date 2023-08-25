import { useQuery } from "react-query";
import { Tag } from "../../ui";
import "./ReviewBanner.scss";
import { getReviews } from "../../../api/review";

const ReviewBanner = () => {
  const { isLoading, isError, data, error } = useQuery("reviews", getReviews, {
    retry: 3,
    staleTime: 5 * 1000,
    cacheTime: 60 * 1000,
  });

  if (isLoading) return <div>loading...</div>;

  if (isError) return <div>error...</div>;

  return (
    <div className="review-banner">
      <h1 className="review-banner-title">최신에 들어온 글이에요!</h1>

      <ul className="review-banner-list">
        {data.slice(0, 3).map((item) => (
          <li className="review-banner-item" key={item.id}>
            <a href={"/detail/" + item.id}>
              <div className="banner-item-title">
                <span className="banner-item-id">답변진행 중</span>
                <h2>{item.title}</h2>
              </div>
            </a>

            <div className="banner-item-tags">
              {item.tags.map((tag, i) => (
                <Tag title={tag} key={i} />
              ))}
            </div>

            <pre className="banner-item-content">{item.content}</pre>

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
          </li>
        ))}
      </ul>
    </div>
  );
};

export { ReviewBanner };
