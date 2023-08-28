import "./ReviewForm.scss";
import { useState } from "react";
import { Button, Modal, ReviewInput, ReviewTextArea } from "../../ui";
import { EditorCode, EditorForm, EditorTemplate } from "../../editor";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { postReviews } from "../../../api/review";

const ReviewForm = () => {
  const navigateTo = useNavigate();
  const [tutalrialIndex, setTutalrialIndex] = useState(0);
  const [form, setForm] = useState({ tags: [], tag: "", title: "", content: "", code: "" });
  const [errors, setErrors] = useState({ tags: "", title: "", content: "" });
  const queryClient = useQueryClient();
  const reviewMutation = useMutation(postReviews, {
    onSuccess: () => {
      queryClient.invalidateQueries("reviews");
      navigateTo("/");
    },
    onError: (error) => console.log(error),
  });

  const validateTags = (tags) => {
    if (tags.length > 4) return "태그는 최대 4개만 가능합니다.";
    return "";
  };

  const validateTitle = (title) => {
    if (title.trim() === "") return "제목을 입력해주세요";
    if (title.length < 5) return "제목의 길이를 (5~30)자로 맞춰주세요";
    if (title.length > 30) return "제목의 길이를 (5~30)자로 맞춰주세요";
    return "";
  };

  const validateContent = (content) => {
    if (content.trim() === "") return "내용을 입력해주세요";
    if (content.length < 30) return "내용의 길이를 (30~300)자로 맞춰주세요";
    if (content.length > 300) return "내용의 길이를 (30~300)자로 맞춰주세요";
    return "";
  };

  console.log(tutalrialIndex);

  const onKeyDownTag = (e) => {
    if (e.key === " ") {
      const newValue = e.target.value + " ";
      const tags = newValue.match(/#([\S]+)/g);
      setForm((prev) => ({ ...prev, tags }));
    }

    if (e.key === "Backspace") {
      const newValue = e.target.value.slice(0, -1);
      const tags = newValue.match(/#([\S]+) /g);
      setForm((prev) => ({ ...prev, tags }));
    }
  };

  const onClickPrevTutalrial = (e) => {
    e.preventDefault();
    setTutalrialIndex(tutalrialIndex - 1);
  };

  const onClickNextTutalrial = (e) => {
    e.preventDefault();
    setTutalrialIndex(tutalrialIndex + 1);
  };

  const onChangeTitle = (e) => {
    const tag = e.target.value.replace(/#([\S]+) /g, '<span class="colorful-text">#$1 </span>');
    const value = e.target.value.replace(/#([\S]+) /g, "");
    setForm((prev) => ({ ...prev, title: value, tag }));
    setErrors((prev) => ({ ...prev, title: "" }));
  };

  const onChangeContent = (e) => {
    setForm((prev) => ({ ...prev, content: e.target.value }));
    setErrors((prev) => ({ ...prev, content: "" }));
  };

  const onChangeCode = (target) => {
    const { name, value } = target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitReview = (e) => {
    e.preventDefault();

    const tagsError = validateTags(form.tags);
    const titleError = validateTitle(form.title);
    const contentError = validateContent(form.content);

    if (tagsError || titleError || contentError) {
      setErrors({
        tags: tagsError,
        title: titleError,
        content: contentError,
      });
      return;
    }

    reviewMutation.mutate(form);

    setForm({ tag: [], title: "", content: "", code: "" });
  };

  if (reviewMutation.isLoading) return <div>loading...</div>;

  if (reviewMutation.isError) return <div>error...</div>;

  return (
    <form className="review-form" onSubmit={onSubmitReview}>
      {/* 리뷰에서 정보 입력 영역 (코드) */}
      <div className="review-form-code">
        {/* 정보 엽력 영역 제목 */}
        <h4 className="form-code-title">
          <span className="code-title-num">1</span>
          코드리뷰 코드를 입력해주세요
        </h4>

        {/* 정보 입력 영역 라벨 (코드) */}
        <label className="form-code-label">
          코드 <span>*</span>
        </label>

        {/* 정보 이볅 영역 내용 */}
        <EditorTemplate>
          <EditorForm name="code" onCode={onChangeCode} />
          <EditorCode code={form.code} />
          {tutalrialIndex === 0 && (
            <Modal
              content="코드를 입력할 수 있는 간의 에디터입니다"
              onClickPrevTutalrial={onClickPrevTutalrial}
              onClickNextTutalrial={onClickNextTutalrial}
            />
          )}
        </EditorTemplate>
      </div>

      {/* 리뷰에서 정보 입력 영역 (제목 , 글 , 기술 스택) */}
      <div className="review-form-info">
        {/* 정보 입력 영역 제목 */}
        <h4 className="form-info-title">
          <span className="info-title-num">2</span>
          코드리뷰 기본 정보를 입력해주세요
        </h4>

        {/* 정보 입력 영역 내용 */}

        <ReviewInput
          name="title"
          label="제목"
          code={form.tag}
          error={errors.title}
          onInput={onChangeTitle}
          onKeyDown={onKeyDownTag}
          placeholder="제목을 입력하세요"
          tutalrial={
            tutalrialIndex === 1 && (
              <Modal
                content="태그 기능이 탑제된 제목입니다"
                onClickPrevTutalrial={onClickPrevTutalrial}
                onClickNextTutalrial={onClickNextTutalrial}
              />
            )
          }
        />
        <ReviewTextArea
          name="content"
          label="내용"
          value={form.content}
          error={errors.content}
          onInput={onChangeContent}
          placeholder="내용을 입력하세요"
        />
        <Button id="review-form-code-button" size="large" primary fullWidth type="submit">
          글 등록
        </Button>
      </div>
    </form>
  );
};

export { ReviewForm };
