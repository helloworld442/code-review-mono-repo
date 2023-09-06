import { styled } from "styled-components";
import { Button, Input, TextArea } from "../ui";
import { EditorCode, EditorForm, EditorTemplate } from "../editor";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { useState } from "react";
import { postReviews } from "../../api/review";

const ReviewForm = () => {
  const navigateTo = useNavigate();
  const queryClient = useQueryClient();
  const [form, setForm] = useState({
    tags: [],
    code: "",
    tag: "",
    title: "",
    problem: "",
    question: "",
    hashs: [],
    hash: "",
  });
  const [errors, setErrors] = useState({ title: "", problem: "", question: "" });
  const reviewMutation = useMutation(postReviews, {
    onSuccess: () => {
      queryClient.invalidateQueries("reviews");
      navigateTo("/");
    },
    onError: (err) => {
      console.log("[DEBUG] review form error: " + err);
    },
  });

  const validateTitle = (title) => {
    if (title.trim() === "") return "제목을 입력해주세요";
    if (title.length < 5) return "제목의 길이를 (5~45)자로 맞춰주세요";
    if (title.length > 45) return "제목의 길이를 (5~45)자로 맞춰주세요";
    return "";
  };

  const validateProblem = (problem) => {
    if (problem.trim() === "") return "문제상황을 입력해주세요";
    return "";
  };

  const validateQuestion = (question) => {
    if (question.trim() === "") return "궁금한 점을 업력해주세요";
    return "";
  };

  const onClickCancelButton = (e) => {
    e.preventDefault();

    navigateTo("/");
  };

  const onKeyDownTag = (e) => {
    if (e.key === " ") {
      const newValue = e.target.value + " ";
      const tags = newValue.match(/#([ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z0-9_]+)/g);
      setForm((prev) => ({ ...prev, tags }));
    }

    if (e.key === "Backspace") {
      const newValue = e.target.value.slice(0, -1);
      const tags = newValue.match(/#([ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z0-9_]+) /g);
      setForm((prev) => ({ ...prev, tags }));
    }
  };

  const onChangeTitle = (e) => {
    const tag = e.target.value.replace(
      /#([ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z0-9_]+) /g,
      '<span class="colorful-text">#$1 </span>'
    );
    setForm((prev) => ({ ...prev, title: e.target.value, tag }));
    setErrors((prev) => ({ ...prev, title: "" }));
  };

  const onChangeContent = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const onChangeCode = (value) => {
    setForm((prev) => ({ ...prev, code: value }));
  };

  const onMouseUpHash = (e) => {
    const selectedText = window.getSelection().toString();
    if (selectedText) {
      setForm((prev) => ({ ...prev, hash: selectedText }));
    }
  };

  const onSubmitHash = (value) => {
    const hashs = { name: form.hash, value };
    setForm((prev) => ({ ...prev, hashs: form.hashs.concat(hashs) }));
    setForm((prev) => ({ ...prev, hash: "" }));
  };

  const onSubmitReview = (e) => {
    e.preventDefault();

    const titleError = validateTitle(form.title);
    const problemError = validateProblem(form.problem);
    const questionError = validateQuestion(form.question);

    if (titleError || problemError || questionError) {
      setErrors({
        title: titleError,
        problem: problemError,
        question: questionError,
      });
      return;
    }

    const value = form.title.replace(/#([ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z0-9_]+)/g, "");

    setForm((prev) => ({ ...prev, title: value }));

    reviewMutation.mutate(form);
  };

  console.log(form);

  if (reviewMutation.isLoading) return <div>loading....</div>;

  if (reviewMutation.isError) return <div>errors....</div>;

  return (
    <StReviewFormContainer>
      <StReviewFormBanner>
        <div className="form-banner-box">
          <h2>코드리뷰를 위한 글을 작성해보세요!!</h2>
          <h4>많은 분들이 코드리뷰를 진행하고 있습니다!! 🥳</h4>
        </div>
      </StReviewFormBanner>

      <StReviewForm onSubmit={onSubmitReview}>
        <ReviewCodeFormBox>
          <StReviewFormTitle>
            <span>1</span>코드 리뷰를 위한 코드를 입력해주세요
          </StReviewFormTitle>

          <StReviewFormContent>
            <EditorTemplate>
              <EditorForm onCode={onChangeCode} />
              <EditorCode
                code={form.code}
                hash={form.hash}
                hashs={form.hashs}
                onMouseUpHash={onMouseUpHash}
                onSubmitHash={onSubmitHash}
              />
            </EditorTemplate>
          </StReviewFormContent>
        </ReviewCodeFormBox>

        <ReviewInfoFormBox>
          <StReviewFormTitle>
            <span>2</span>코드 리뷰를 위한 정보를 입력해주세요
          </StReviewFormTitle>

          <StReviewFormContent>
            <Input label="제목" isEssential>
              <Input.Content>
                <Input.Code code={form.tag} />
                <Input.Value
                  value={form.title}
                  onChange={onChangeTitle}
                  onKeyDown={onKeyDownTag}
                  placeholder="제목을 입력하세요"
                />
              </Input.Content>
              <Input.Error error={errors.title} />
            </Input>

            <TextArea label="문제상황" isEssential>
              <TextArea.Value
                name="problem"
                value={form.problem}
                onChange={onChangeContent}
                placeholder="문제상황을 입력하세요"
              />
              <TextArea.Error error={errors.problem} />
            </TextArea>

            <TextArea label="궁금한 점" isEssential>
              <TextArea.Value
                name="question"
                value={form.question}
                onChange={onChangeContent}
                placeholder="궁금한 점을 입력하세요"
              />
              <TextArea.Error error={errors.question} />
            </TextArea>

            <div className="review-form-buttons">
              <Button size="medium" onClick={onClickCancelButton}>
                취소
              </Button>
              <Button size="medium" primary="true" type="submit">
                등록
              </Button>
            </div>
          </StReviewFormContent>
        </ReviewInfoFormBox>
      </StReviewForm>
    </StReviewFormContainer>
  );
};

const StReviewFormContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const StReviewFormBanner = styled.article`
  width: 100vw;
  height: 150px;
  margin-top: 80px;
  margin-bottom: 36px;
  background: #403a6b;

  .form-banner-box {
    width: calc(100% - 72px);
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
      margin-bottom: 16px;
      font-size: 1.8rem;
      font-weight: 400;
      color: #eee;
    }

    h4 {
      font-size: 1rem;
      font-weight: 400;
      color: #eee;
    }
  }
`;

const StReviewForm = styled.form`
  width: 100%;
  padding: 36px;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  gap: 36px;
`;

const StReviewFormTitle = styled.h2`
  padding-bottom: 12px;
  margin-bottom: 36px;
  font-size: 1.8rem;
  font-weight: 400;
  color: #333;
  border-bottom: 3px solid #e8e8e8;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  span {
    width: 36px;
    height: 36px;
    font-size: 1.4rem;
    font-weight: 400;
    color: #eee;
    border: 5px solid #e8e8e8;
    border-radius: 100%;
    background: #403a6b;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const StReviewFormContent = styled.div`
  overflow-y: scroll;
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  .review-form-buttons {
    margin-top: 36px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
  }
`;

const ReviewCodeFormBox = styled.div`
  width: 100%;
  height: auto;
`;

const ReviewInfoFormBox = styled.div`
  width: 100%;
  height: auto;
`;

export { ReviewForm };
