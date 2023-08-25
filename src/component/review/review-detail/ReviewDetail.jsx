import { useParams } from "react-router-dom";
import "./ReviewDetail.scss";
import { useQuery } from "react-query";
import { getReviewById } from "../../../api/review";

const ReviewDetail = () => {
  const { id } = useParams();
  const { isLoading, isError, data, error } = useQuery(["reviews", id], () => getReviewById(id));

  console.log(data);

  if (isLoading) return <div>loading...</div>;

  if (isError) return <div>error...</div>;

  return (
    <div className="review-detail">
      {/* 리뷰 질문 영역 */}
      <div className="review-detail-question">
        {/* 질문 제목 */}
        <h2 className="question-title">
          <span>Q.</span>
          {data.title}
        </h2>

        {/* 질문 내용 */}
        <div className="question-content">
          {/* 코드 내용 */}
          <pre className="content-code">
            <code dangerouslySetInnerHTML={{ __html: data.code }}></code>
          </pre>

          {/* 설명 내용 */}
          <pre className="content-desc">{data.content}</pre>
        </div>
      </div>
      {/* 리뷰 해설 영역 */}
      <div className="review-detail-answer"></div>
    </div>
  );
};

export { ReviewDetail };
