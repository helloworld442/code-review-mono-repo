import "./TextArea.scss";

const TextArea = ({ children, label }) => {
  return (
    <div className="textarea">
      <label className="textarea-label">{label}</label>
      {children}
    </div>
  );
};

const TextAreaValue = ({ ...rest }) => {
  return <textarea className="textarea-value" {...rest} />;
};

TextArea.Value = TextAreaValue;

export default TextArea;
