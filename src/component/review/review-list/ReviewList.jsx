import "./ReviewList.scss";
import ReviewItem from "./ReviewItem";
import ReviewSearch from "../review-search/ReviewSearch";
import { Pagination } from "../../ui";
import { useQuery } from "react-query";
import { getReviews } from "../../../api/review";
import { useState } from "react";

const ReviewList = () => {
  const [currPage, setCurrPage] = useState(1);
  const { isLoading, isError, data, error } = useQuery("reviews", getReviews, {
    retry: 3,
    staleTime: 5 * 1000,
    cacheTime: 60 * 1000,
  });

  const onClickPages = (number) => setCurrPage(number);

  const onClickPrevPages = () => {
    if (currPage > 1) {
      setCurrPage(currPage - 1);
    }
  };

  const onClickNextPages = () => {
    if (currPage < Math.ceil(data?.length / 3)) {
      setCurrPage(currPage + 1);
    }
  };
  console.log(currPage);

  if (isLoading) return <div>loading</div>;

  if (isError) return <div>error</div>;

  return (
    <ul className="review-list">
      <ReviewSearch />
      {data.map((item) => (
        <ReviewItem key={item.id} review={item} />
      ))}
      <Pagination
        currPage={currPage}
        totalPages={data.length}
        itemPerPages={3}
        onClickPages={onClickPages}
        onClickPrevPages={onClickPrevPages}
        onClickNextPages={onClickNextPages}
      />
    </ul>
  );
};

export { ReviewList };
