import "./Button.scss";
import classNames from "classnames";

const Button = ({ children, size, fullWidth, primary, ...rest }) => {
  return (
    <button className={classNames("button", size, { primary, fullWidth })} {...rest}>
      {children}
    </button>
  );
};

export { Button };
