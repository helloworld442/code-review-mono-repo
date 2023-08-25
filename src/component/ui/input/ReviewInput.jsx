import classNames from "classnames";
import Input from "./Input";

const ReviewInput = ({
  name,
  label,
  isEssential,
  value,
  error,
  onInput,
  onKeyDown,
  placeholder,
}) => {
  return (
    <Input label={label} isEssential={isEssential}>
      <Input.Value
        name={name}
        value={value}
        id={classNames({ error })}
        onChange={onInput}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
      />
      <Input.Error error={error} />
    </Input>
  );
};

export { ReviewInput };
