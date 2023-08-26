import "./ReviewList.scss";
import ReviewItem from "./ReviewItem";
import ReviewSearch from "../review-search/ReviewSearch";
import { useQuery } from "react-query";
import { getReviews } from "../../../api/review";

const ReviewList = () => {
  const { isLoading, isError, data, error } = useQuery("reviews", getReviews, {
    retry: 3,
    staleTime: 5 * 1000,
    cacheTime: 60 * 1000,
  });

  if (isLoading) return <div>loading</div>;

  if (isError) return <div>error</div>;

  console.log(data);

  return (
    <ul className="review-list">
      <ReviewSearch />
      {data.map((item) => (
        <ReviewItem key={item.id} review={item} />
      ))}
    </ul>
  );
};

export { ReviewList };
