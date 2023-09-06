import { styled } from "styled-components";

const Input = ({ children, label, isEssential }) => {
  return (
    <StInput>
      <StInputLabel className="input-label">
        {label} {isEssential && <span>*</span>}
      </StInputLabel>
      {children}
    </StInput>
  );
};

const InputContent = ({ children }) => {
  return <StInputContent className="input-content">{children}</StInputContent>;
};

const InputCode = ({ code }) => {
  return <pre dangerouslySetInnerHTML={{ __html: code }} />;
};

const InputValue = ({ ...rest }) => {
  return <input {...rest} spellCheck="false" autoComplete="false" />;
};

const InputError = ({ error }) => {
  return <StInputError className="input-error">{error}</StInputError>;
};

const StInput = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 24px;
`;

const StInputLabel = styled.label`
  display: inline-block;
  margin-bottom: 12px;
  font-size: 1.8rem;
  font-weight: 400;
  color: #333;

  span {
    color: red;
  }
`;

const StInputContent = styled.div`
  position: relative;
  width: 100%;
  height: 56px;
  padding: 12px;
  box-sizing: border-box;
  border: 2px solid #bbb;
  border-radius: 8px;
  background: #fff;

  pre,
  input {
    position: absolute;
    top: 12px;
    left: 12px;
  }

  pre {
    width: calc(100% - 24px);
    height: calc(100% - 24px);
    font-size: 1.4rem;
    font-weight: 400;
    font-family: "Jua", sans-serif;
    color: #333;
    background: transparent;
    z-index: 0;

    .colorful-text {
      color: rgb(64, 58, 107, 0.8);
    }
  }

  input {
    width: calc(100% - 24px);
    height: calc(100% - 24px);
    border: none;
    outline: none;
    font-size: 1.4rem;
    font-weight: 400;
    font-family: "Jua", sans-serif;
    color: transparent;
    caret-color: #333;
    background: transparent;
    z-index: 1;
  }
`;

const StInputError = styled.span`
  display: inline-block;
  margin-top: 12px;
  font-size: 1rem;
  font-weight: 400;
  color: red;
`;

Input.Content = InputContent;
Input.Code = InputCode;
Input.Value = InputValue;
Input.Error = InputError;

export { Input };
