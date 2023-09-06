import { styled } from "styled-components";

const TextArea = ({ children, label, isEssential }) => {
  return (
    <StTextArea className="textarea">
      <StTextAreaLabel className="textarea-label">
        {label} {isEssential && <span>*</span>}
      </StTextAreaLabel>
      {children}
    </StTextArea>
  );
};

const TextAreaValue = ({ ...rest }) => {
  return <StTextAreaValue className="textarea-value" {...rest} />;
};

const TextAreaError = ({ error }) => {
  return <StTextAreaError className="textarea-error">{error}</StTextAreaError>;
};

const StTextArea = styled.div`
  position: relative;
  width: 100%;

  & + & {
    margin-top: 24px;
  }
`;

const StTextAreaLabel = styled.label`
  display: inline-block;
  margin-bottom: 12px;
  font-size: 1.8rem;
  font-weight: 400;
  color: #333;

  span {
    color: red;
  }
`;

const StTextAreaValue = styled.textarea`
  position: relative;
  width: 100%;
  height: 200px;
  padding: 12px;
  box-sizing: border-box;
  border: 2px solid #bbb;
  border-radius: 8px;
  outline: none;
  font-size: 1.4rem;
  font-weight: 400;
  font-family: "Jua", sans-serif;
  color: #333;
  background: #fff;
  resize: none;

  &::placeholder {
    color: #888;
  }

  &#error {
    border: 3px solid red;
  }
`;

const StTextAreaError = styled.span`
  display: inline-block;
  margin-top: 12px;
  font-size: 1rem;
  font-weight: 400;
  color: red;
`;

TextArea.Value = TextAreaValue;
TextArea.Error = TextAreaError;

export { TextArea };
