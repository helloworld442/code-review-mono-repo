import "./review-list.style.scss";
import ReviewItem from "./review-item.component";
import { useQuery } from "react-query";
import { getReviews } from "./review-list.api";

const ReviewList = () => {
  const { isLoading, isError, data, error } = useQuery("/reviews", getReviews, {
    retry: 3,
    staleTime: 5 * 1000,
    cacheTime: 60 * 1000,
  });

  if (isLoading) return <div>loading</div>;

  if (isError) return <div>error</div>;

  console.log(data);

  return (
    <ul className="review-list">
      {data.map((item) => (
        <ReviewItem key={item.id} review={item} />
      ))}
    </ul>
  );
};

export { ReviewList };
