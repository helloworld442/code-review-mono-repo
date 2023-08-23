import { useState } from "react";
import { ReviewSelect } from "../../ui";
import "./ReviewForm.scss";

const ReviewForm = () => {
  const skillOptions = ["JavaScript", "Node Js", "React Js"];
  const [form, setForm] = useState({ skill: "" });
  const [errors, setErrors] = useState({ skill: "" });

  const validateSkill = (skill) => {
    if (skill.trim() === "") return "기술 스택을 입력해주세요";
    return "";
  };

  const onChangeSelect = (target) => {
    const { name, value } = target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const onSubmitReview = (e) => {
    e.preventDefault();

    const skillError = validateSkill(form.skill);

    if (skillError) {
      setErrors({ skill: skillError });
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
      </div>

      {/* 리뷰에서 정보 입력 영역 (코드) */}
      <div className="review-form-code"></div>
    </form>
  );
};

export { ReviewForm };
