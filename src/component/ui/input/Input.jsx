import "./Input.scss";

const Input = ({ children, label }) => {
  return (
    <div className="input">
      <label className="input-label">{label}</label>
      {children}
    </div>
  );
};

const InputValue = ({ ...rest }) => {
  return <input className="input-value" {...rest} />;
};

const InputError = ({ error }) => {
  return <span className="input-error">{error}</span>;
};

Input.Value = InputValue;
Input.Error = InputError;

export default Input;
