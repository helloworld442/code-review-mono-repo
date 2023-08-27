import TextArea from "./TextArea";

const ReviewTextArea = ({ name, label, value, error, onInput, placeholder }) => {
  return (
    <TextArea label={label}>
      <TextArea.Value name={name} value={value} onChange={onInput} placeholder={placeholder} />
      <TextArea.Error error={error} />
    </TextArea>
  );
};

export { ReviewTextArea };
