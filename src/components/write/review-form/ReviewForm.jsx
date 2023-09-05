import "./ReviewForm.scss";
import { ReviewFormInput, ReviewFormTextArea, Button } from "../../ui";
import { EditorTemplate } from "../editor-template/EditorTemplate";
import { EditorForm } from "../editor-form/EditorForm";
import { EditorCode } from "../editor-code/EditorCode";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { postReviews } from "../../../api/review";

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
    if (title.length < 5) return "제목의 길이를 (5~30)자로 맞춰주세요";
    if (title.length > 30) return "제목의 길이를 (5~30)자로 맞춰주세요";
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

    setForm({
      tags: [],
      code: "",
      tag: "",
      title: "",
      problem: "",
      question: "",
      hashs: [],
      hash: "",
    });
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
    const value = e.target.value.replace(/#([ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z0-9_]+) /g, "");
    setForm((prev) => ({ ...prev, title: value, tag }));
    setErrors((prev) => ({ ...prev, title: "" }));
  };

  const onChangeProblem = (e) => {
    setForm((prev) => ({ ...prev, problem: e.target.value }));
    setErrors((prev) => ({ ...prev, problem: "" }));
  };

  const onChangeQuestion = (e) => {
    setForm((prev) => ({ ...prev, question: e.target.value }));
    setErrors((prev) => ({ ...prev, question: "" }));
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

    reviewMutation.mutate(form);

    setForm({ tags: [], tag: "", title: "", problem: "", question: "", code: "" });
  };

  if (reviewMutation.isLoading) return <div>loading....</div>;

  if (reviewMutation.isError) return <div>errors....</div>;

  return (
    <div className="review-form-container">
      <article data-testid="review-form-banner" className="review-form-banner">
        <div className="form-banner-box">
          <h2>코드리뷰를 위한 글을 작성해보세요!!</h2>
          <h4>많은 분들이 코드리뷰를 진행하고 있습니다!! 🥳</h4>
        </div>
      </article>

      <form className="review-form" onSubmit={onSubmitReview}>
        <div data-testid="review-code-form" className="review-code-form">
          <h2 className="review-code-form-title">
            <span>1</span>코드 리뷰를 위한 코드를 입력해주세요
          </h2>

          <div className="review-code-form-content">
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
          </div>
        </div>
        <div data-testid="review-info-form" className="review-info-form">
          <h2 className="review-info-form-title">
            <span>2</span>코드 리뷰를 위한 정보를 입력해주세요
          </h2>

          <div className="review-info-form-content">
            <ReviewFormInput
              label="제목"
              code={form.tag}
              error={errors.title}
              onInput={onChangeTitle}
              onKeyDown={onKeyDownTag}
              placeholder="제목을 입력하세요"
              isEssential
            />
            <ReviewFormTextArea
              label="문제상황"
              value={form.problem}
              error={errors.problem}
              onInput={onChangeProblem}
              placeholder="문제상황을 입력하세요"
              isEssential
            />
            <ReviewFormTextArea
              label="궁금한 점"
              value={form.question}
              error={errors.question}
              onInput={onChangeQuestion}
              placeholder="궁금한 점을 입력하세요"
              isEssential
            />
          </div>
          <div className="review-form-buttons">
            <Button size="medium" onClick={onClickCancelButton}>
              취소
            </Button>
            <Button size="medium" primary type="submit">
              등록
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export { ReviewForm };
