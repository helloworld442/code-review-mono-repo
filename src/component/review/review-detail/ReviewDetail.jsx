import { useParams } from "react-router-dom";
import "./ReviewDetail.scss";
import { useQuery } from "react-query";
import { getReviewById } from "../../../api/review";
import { Button, ReviewInput, ReviewTextArea, Tag } from "../../ui";
import { useState } from "react";

const ReviewDetail = () => {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const { isLoading, isError, data, error } = useQuery(["reviews", id], () => getReviewById(id));

  const onOpenModal = () => setIsOpen(true);

  const onCloseModal = () => setIsOpen(false);

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
          <pre className="content-code" onClick={onOpenModal}>
            <code dangerouslySetInnerHTML={{ __html: data.code }}></code>
          </pre>

          {/* 코드 모달창 */}
          {isOpen && (
            <div className="detail-code-modal">
              <div className="code-modal-background" onClick={onCloseModal}></div>
              <pre className="code-modal-content">
                <code dangerouslySetInnerHTML={{ __html: data.code }}></code>
              </pre>
            </div>
          )}

          {/* 설명 내용 */}
          <pre className="content-desc">{data.content}</pre>
        </div>

        <div className="question-tags">
          {data.tags.map((tag, i) => (
            <Tag key={i} title={tag} />
          ))}
        </div>
      </div>
      {/* 리뷰 해설 영역 */}
      <div className="review-detail-answer">
        <h2 className="answer-title">
          <span>A.</span>
          아직 답변이 없습니다!!
        </h2>

        <div className="answer-content">
          <ReviewInput label="제목" isEssential />
          <ReviewTextArea label="내용" />
          <Button size="large" primary>
            등록
          </Button>
        </div>
      </div>
    </div>
  );
};

export { ReviewDetail };
