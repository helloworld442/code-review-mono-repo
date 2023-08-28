import TextArea from "./TextArea";

const ReviewTextArea = ({ name, label, value, error, onInput, placeholder, tutalrial }) => {
  return (
    <TextArea label={label}>
      <TextArea.Value name={name} value={value} onChange={onInput} placeholder={placeholder} />
      {tutalrial}
      <TextArea.Error error={error} />
    </TextArea>
  );
};

export { ReviewTextArea };
