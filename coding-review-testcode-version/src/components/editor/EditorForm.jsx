import { styled } from "styled-components";
import { useEffect, useRef, useState } from "react";

const EditorForm = ({ onCode }) => {
  const [value, setValue] = useState("");
  const textareaRef = useRef(null);

  const onChangeValue = (e) => {
    setValue(e.target.value);
  };

  const onKeyDownValue = (e) => {
    if (e.keyCode === 9) {
      e.preventDefault();
      let val = e.target.value;
      let start = e.target.selectionStart;
      let end = e.target.selectionEnd;
      const tabSpaces = "   ";
      e.target.value = val.substring(0, start) + tabSpaces + val.substring(end);
      e.target.selectionStart = e.target.selectionEnd = start + tabSpaces.length;
      setValue(e.target.value);
    }
  };

  useEffect(() => {
    onCode(value);
  }, [value]);

  useEffect(() => {
    const textarea = textareaRef.current;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  }, [value]);

  return (
    <StEditorForm
      ref={textareaRef}
      value={value}
      onChange={onChangeValue}
      onKeyDown={onKeyDownValue}
      spellCheck="false"
    />
  );
};

const StEditorForm = styled.textarea`
  position: absolute;
  right: 0;
  width: 95%;
  padding: 1rem;
  box-sizing: border-box;
  border: none;
  outline: none;
  font-size: 1rem;
  font-weight: 400;
  font-family: monospace;
  color: transparent;
  background: transparent;
  caret-color: red;
  line-height: 1.5rem;
  resize: none;
  z-index: 1;
  white-space: pre-wrap;
  overflow-y: hidden;
`;

export { EditorForm };
