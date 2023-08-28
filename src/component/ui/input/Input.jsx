import classNames from "classnames";
import "./Input.scss";

const Input = ({ children, label }) => {
  return (
    <div className="input">
      <label className="input-label">{label}</label>
      {children}
    </div>
  );
};

const InputContent = ({ children, tutalrial }) => {
  return <div className={classNames("input-content", { tutalrial })}>{children}</div>;
};

const InputCode = ({ code }) => {
  return <pre dangerouslySetInnerHTML={{ __html: code }} />;
};

const InputValue = ({ tutalrial, ...rest }) => {
  return <input {...rest} spellCheck="false" autoComplete="false" />;
};

const InputError = ({ error }) => {
  return <span className="input-error">{error}</span>;
};

Input.Content = InputContent;
Input.Code = InputCode;
Input.Value = InputValue;
Input.Error = InputError;

export default Input;
