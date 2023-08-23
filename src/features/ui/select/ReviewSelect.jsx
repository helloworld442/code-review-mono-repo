import Select from "./Select";
import { ReactComponent as ArrowDown } from "../../../assets/arrow-down-solid.svg";

const ReviewSelect = ({ label, options }) => {
  return (
    <Select label={label}>
      <Select.Trigger trigger={<ReviewSelectTrigger />} />
      <Select.Menu>
        {options.map((option, i) => (
          <Select.Item key={i} item={option} />
        ))}
      </Select.Menu>
    </Select>
  );
};

const ReviewSelectTrigger = () => {
  return (
    <>
      <span className="review-select-trigger">기술 스택을 선택하세요</span>
      <ArrowDown className="review-select-arrow" />
    </>
  );
};

export { ReviewSelect };
