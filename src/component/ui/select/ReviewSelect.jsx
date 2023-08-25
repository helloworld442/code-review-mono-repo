import Select from "./Select";
import { ReactComponent as ArrowDown } from "../../../assets/arrow-down-solid.svg";
import classNames from "classnames";

const ReviewSelect = ({ name, label, value, error, options, onSelect }) => {
  return (
    <Select name={name} onSelect={onSelect}>
      <Select.Label label={label} />
      <Select.Trigger error={error} trigger={<ReviewSelectTrigger value={value} />} />
      <Select.Menu>
        {options.map((option, i) => (
          <Select.Item key={i} item={option} />
        ))}
      </Select.Menu>
      <Select.Error error={error} />
    </Select>
  );
};

const ReviewSelectTrigger = ({ value }) => {
  return (
    <>
      <span className={classNames("review-select-trigger", { active: value })}>
        {value ? value : "기술 스택을 선택하세요"}
      </span>
      <ArrowDown className="review-select-arrow" />
    </>
  );
};

export { ReviewSelect };
