import { ReviewSelect } from "../../ui";
import "./ReviewForm.scss";

const ReviewForm = () => {
  const skillOptions = ["JavaScript", "Node Js", "React Js"];

  return (
    <form className="review-form">
      <div className="review-form-info">
        <ReviewSelect label="기술 스택" options={skillOptions} />
      </div>
      <div className="review-form-code"></div>
    </form>
  );
};

export { ReviewForm };
