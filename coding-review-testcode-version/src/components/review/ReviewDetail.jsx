import { styled } from "styled-components";
import { ReviewQuestion } from "./ReviewQuestion";
import { ReviewAnswer } from "./ReviewAnswer";
import { ReviewLikes } from "./ReviewLikes";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getReviewById } from "../../api/review";

const ReviewDetail = () => {
  const { postId } = useParams();
  const { isLoading, isError, data, error } = useQuery(["reviews", postId], () =>
    getReviewById(postId)
  );

  console.log("[DEBUG] Review detail error : ", error);

  if (isLoading) return <div>loading....</div>;

  if (isError) return <div>error....</div>;

  return (
    <StReviewDetail>
      <ReviewQuestion data={data} />
      <ReviewAnswer data={data} />
      <ReviewLikes data={data} />
    </StReviewDetail>
  );
};

const StReviewDetail = styled.div`
  width: 100%;
  height: auto;
  margin-top: 80px;
`;

export { ReviewDetail };
