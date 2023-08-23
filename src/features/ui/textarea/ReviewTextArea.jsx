import TextArea from "./TextArea";

const ReviewTextArea = ({ name, label, value, error, onInput, placeholder }) => {
  return (
    <TextArea label={label}>
      <TextArea.Value placeholder={placeholder} />
    </TextArea>
  );
};

export { ReviewTextArea };
