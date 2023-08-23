import { useState } from "react";
import { ReviewInput, ReviewSelect, ReviewTextArea } from "../../ui";
import "./ReviewForm.scss";

const ReviewForm = () => {
  const skillOptions = ["JavaScript", "Node Js", "React Js"];
  const [form, setForm] = useState({ skill: "", title: "" });
  const [errors, setErrors] = useState({ skill: "", title: "" });

  const validateSkill = (skill) => {
    if (skill.trim() === "") return "기술 스택을 입력해주세요";
    return "";
  };

  const validateTitle = (title) => {
    if (title.trim() === "") return "제목을 입력해주세요";
    if (title.length < 15) return "제목의 길이를 (15~30)자로 맞춰주세요";
    if (title.length > 30) return "제목의 길이를 (15~30)자로 맞춰주세요";
    return "";
  };

  const onChangeSelect = (target) => {
    const { name, value } = target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const onSubmitReview = (e) => {
    e.preventDefault();

    const skillError = validateSkill(form.skill);
    const titleError = validateTitle(form.title);

    if (skillError) {
      setErrors({ skill: skillError, title: titleError });
      return;
    }
  };

  return (
    <form className="review-form" onSubmit={onSubmitReview}>
      {/* 리뷰에서 정보 입력 영역 (제목 , 글 , 기술 스택) */}
      <div className="review-form-info">
        {/* 기술 스택 입력 영역 */}
        <ReviewSelect
          name="skill"
          label="기술 스택"
          value={form.skill}
          error={errors.skill}
          options={skillOptions}
          onSelect={onChangeSelect}
        />
        <ReviewInput
          name="title"
          label="제목"
          value={form.title}
          error={errors.title}
          onInput={onChangeInput}
          placeholder="제목을 입력하세요"
        />
        <ReviewTextArea name="content" label="내용" placeholder="내용을 입력하세요" />
      </div>

      {/* 리뷰에서 정보 입력 영역 (코드) */}
      <div className="review-form-code"></div>
    </form>
  );
};

export { ReviewForm };
