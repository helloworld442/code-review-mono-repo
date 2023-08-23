import TextArea from "./TextArea";

const ReviewTextArea = ({ name, label, value, error, onInput, placeholder }) => {
  return (
    <TextArea label={label}>
      <TextArea.Value
        name={name}
        value={value}
        error={error}
        onChange={onInput}
        placeholder={placeholder}
      />
    </TextArea>
  );
};

export { ReviewTextArea };
