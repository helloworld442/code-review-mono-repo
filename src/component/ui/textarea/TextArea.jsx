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

const TextAreaError = ({ error }) => {
  return <span className="textarea-error">{error}</span>;
};

TextArea.Value = TextAreaValue;
TextArea.Error = TextAreaError;

export default TextArea;
