import Input from "./Input";

const ReviewInput = ({ name, label, value, error, onInput, placeholder }) => {
  return (
    <Input label={label}>
      <Input.Value name={name} value={value} onChange={onInput} placeholder={placeholder} />
      <Input.Error error={error} />
    </Input>
  );
};

export { ReviewInput };
