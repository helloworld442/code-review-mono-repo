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

Input.Value = InputValue;

export default Input;
