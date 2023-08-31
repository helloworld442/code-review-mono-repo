import TextArea from "./TextArea";

const ReviewDetailTextArea = ({ label, value, error, onInput, placeholder, isEssential }) => {
  return (
    <TextArea label={label} isEssential={isEssential}>
      <TextArea.Value value={value} onChange={onInput} placeholder={placeholder} />
      <TextArea.Error error={error} />
    </TextArea>
  );
};

export { ReviewDetailTextArea };
