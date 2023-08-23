import Input from "./Input";

const ReviewInput = ({ name, label, value, error, onInput, placeholder }) => {
  return (
    <Input label={label}>
      <Input.Value
        name={name}
        value={value}
        error={error}
        onChange={onInput}
        placeholder={placeholder}
      />
    </Input>
  );
};

export { ReviewInput };
