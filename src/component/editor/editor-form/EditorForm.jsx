import { useEffect, useRef, useState } from "react";
import "./EditorForm.scss";

const EditorForm = ({ name, onCode }) => {
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
    const hgCode = value
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/(['"])(.*?)\1/g, '<span class = "hg-marker-code">$1$2$1</span>')
      .replace(
        /function\s+(\w+)\(([^)]+)\)/g,
        'function $1(<span class = "hg-fc-parenthesis-code">$2</span>)'
      )
      .replace(
        /(for|while)(\([^)]*\))/g,
        '<span class = "hg-block-code">$1<span class = "hg-block-parenesis-code">$2</span></span>'
      )
      .replace(
        /(if|else|else if)(\([^)]*\))/g,
        '<span class = "hg-conditional-code">$1<span class = "hg-con-parenesis-code">$2</span></span>'
      )
      .replace(
        /(\w+)(\([^)]*\))/g,
        '<span class = "hg-word-code">$1<span class = "hg-word-parenthesis-code">$2</span></span>'
      )
      .replace(/(import|export|from|default)/g, '<span class = "hg-gate-code">$1</span>')
      .replace(/(function)/g, '<span class = "hg-function-keyword-code">$1</span>')
      .replace(/(const|var|let)/g, '<span class = "hg-var-code">$1</span>')
      .replace(/(break|continue)/g, '<span class = "hg-block-return-code">$1</span>')
      .replace(/(return)/g, '<span class = "hg-return-code">$1</span>')
      .replace(/(null|undefined|false|true)/g, '<span class = "hg-null-code">$1</span>')
      .replace(/(className)/g, '<span class = "hg-classnames-code">$1</span>')
      .replace(/(\d)/g, '<span class = "hg-num-code">$1</span>')
      .replace(/\/\/.*/g, '<span class = "hg-comment-code">$&</span>')
      .replace(/\[([^\[\]=<>]*)\]/g, '<span class = "hg-bracket-var-code">[$1]</span>')
      .replace(/(\(|\))/g, '<span class = "hg-parenthesis-code">$1</span>')
      .replace(/(\{|\})/g, '<span class = "hg-brace-code">$1</span>')
      .replace(/(\[|\])/g, '<span class = "hg-brackets-code">$1</span>')
      .replace(/&lt;([A-Z][^&<>]*)/g, '<span class = "hg-component-code">&lt;$1</span>')
      .replace(/&lt;\/([A-Z][^&<>]*)/g, '<span class = "hg-component-code">&lt;/$1</span>')
      .replace(/&lt;([a-z][^&<>]*)/g, '<span class = "hg-element-code">&lt;$1</span>')
      .replace(/&lt;\/([a-z][^&<>]*)/g, '<span class = "hg-element-code">&lt;/$1</span>')
      .replace(/&lt;|&gt;/g, '<span class="hg-hyper-code">$&</span>');

    onCode({ name, value: hgCode });
  }, [value]);

  useEffect(() => {
    const textarea = textareaRef.current;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  }, [value]);

  return (
    <textarea
      ref={textareaRef}
      className="editor-form"
      value={value}
      onChange={onChangeValue}
      onKeyDown={onKeyDownValue}
      autoComplete="false"
      spellCheck="false"
    ></textarea>
  );
};

export { EditorForm };
