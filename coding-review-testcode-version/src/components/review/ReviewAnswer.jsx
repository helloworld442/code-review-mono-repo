import { styled } from "styled-components";
import { Button, Input, TextArea } from "../ui";

const ReviewAnswer = ({ data }) => {
  return (
    <StReviewAnswer>
      <StReviewAnswerTitle>
        <span>A.</span>
        아직 답변이 없습니다.
      </StReviewAnswerTitle>

      <StReviewAnswerContent>
        <form>
          <Input label="제목" isEssential="true">
            <Input.Content>
              <Input.Value placeholder="제목을 입력하세요" />
            </Input.Content>
            <Input.Error />
          </Input>

          <TextArea label="내용" isEssential="true">
            <TextArea.Value placeholder="내용을 입력하세요" />
            <TextArea.Error />
          </TextArea>

          <div className="answer-content-form-button">
            <Button size="medium">취소</Button>
            <Button size="medium" primary="true" type="submit">
              등록
            </Button>
          </div>
        </form>
      </StReviewAnswerContent>
    </StReviewAnswer>
  );
};

const StReviewAnswer = styled.div`
  width: 100%;
  height: auto;
  padding: 24px 0;
  box-sizing: border-box;
`;

const StReviewAnswerTitle = styled.h1`
  width: 900px;
  margin: 0 auto;
  border-bottom: 3px solid #e8e8e8;
  font-size: 2rem;
  font-weight: 400;
  color: #333;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;

  span {
    font-size: 5rem;
    font-weight: 400;
    color: rgb(64, 58, 107, 0.8);
  }
`;

const StReviewAnswerContent = styled.div`
  width: 900px;
  margin: 24px auto;

  form {
    margin-top: 24px;

    .answer-content-form-button {
      margin-top: 36px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 12px;
    }
  }
`;

export { ReviewAnswer };
