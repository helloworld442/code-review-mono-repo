import classNames from "classnames";
import Input from "./input.component";

const ReviewInput = ({ name, label, value, error, onInput, placeholder }) => {
  return (
    <Input label={label}>
      <Input.Value
        name={name}
        value={value}
        id={classNames({ error })}
        onChange={onInput}
        placeholder={placeholder}
      />
      <Input.Error error={error} />
    </Input>
  );
};

export { ReviewInput };
