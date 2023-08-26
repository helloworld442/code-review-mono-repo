import Input from "./Input";

const ReviewTagInput = ({ name, label, value, onInput, onKeyDown, tagContainer }) => {
  return (
    <Input label={label}>
      <Input.Value name={name} value={value} onChange={onInput} />
      {tagContainer}
    </Input>
  );
};

export { ReviewTagInput };
