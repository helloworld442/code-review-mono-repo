import { styled } from "styled-components";
import { ReviewItem } from "./ReviewItem";
import { ReviewCategory } from "./ReviewCategory";
import { ReviewSearch } from "./ReviewSearch";
import { useQuery } from "react-query";
import { getReviews } from "../../api/review";

const ReviewList = () => {
  const { isLoading, isError, data, error } = useQuery("reviews", getReviews, {
    retry: 3,
    staleTime: 5 * 60 * 1000,
    cacheTime: 60 * 60 * 1000,
  });

  console.log("[DEBUG] Review list error : ", error);

  if (isLoading) return <div>loading....</div>;

  if (isError) return <div>errors...</div>;

  return (
    <StReviewListBox>
      <ReviewCategory />
      <ReviewSearch />

      <StReviewList>
        {data.map((item) => (
          <ReviewItem key={item.id} review={item} />
        ))}
      </StReviewList>
    </StReviewListBox>
  );
};

const StReviewListBox = styled.div`
  position: relative;
  flex: 5;
  height: auto;
  padding: 24px;
  box-sizing: border-box;
  border: 2px solid #bbb;
  border-radius: 4px;
  background: #fff;
`;

const StReviewList = styled.ul`
  width: 100%;
  min-height: 700px;
  padding-bottom: 48px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 24px;
  transition: all 0.8s ease-in-out;
`;

export { ReviewList };
