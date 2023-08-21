import "./EditorForm.scss";
import { useEffect, useState } from "react";
import { useEditorDispatch } from "../container/EditorContainer";

const EditorForm = () => {
  const [code, setCode] = useState("");
  const dispatch = useEditorDispatch();

  useEffect(() => {
    const hightLightCode = code
      .replace(/for/g, '<span class = "for-loop-code">for</span>')
      .replace(/while/g, '<span class = "while-loop-code">while</span>')
      .replace(/function/g, '<span class = "function-code">function</span>')
      .replace(/(\w+\([^)]*\))/gu, '<span class="highlight-function">$1</span>')
      .replace(
        /var\s+([a-zA-Z]+)/g,
        `<span class = "variable-code">var</span> <span class="var-code">$1</span>`
      )
      .replace(
        /const\s+([a-zA-Z]+)/g,
        '<span class = "variable-code">const</span> <span class="const-code">$1</span>'
      )
      .replace(
        /let\s+([a-zA-Z]+)/g,
        `<span class = "variable-code">let</span> <span class="let-code">$1</span>`
      )
      .replace(
        /var\s+(`.+?`|\[.+?\])/g,
        '<span class = "variable-code">var</span> <span class="const-code">$1</span>'
      )
      .replace(
        /const\s+(`.+?`|\[.+?\])/g,
        '<span class = "variable-code">const</span> <span class="const-code">$1</span>'
      )
      .replace(
        /let\s+(`.+?`|\[.+?\])/g,
        '<span class = "variable-code">let</span> <span class="const-code">$1</span>'
      )
      .replace(
        /var\s+(`.+?`|\{.+?\})/g,
        '<span class = "variable-code">var</span> <span class="const-code">$1</span>'
      )
      .replace(
        /const\s+(`.+?`|\{.+?\})/g,
        '<span class = "variable-code">const</span> <span class="const-code">$1</span>'
      )
      .replace(
        /let\s+(`.+?`|\{.+?\})/g,
        '<span class = "variable-code">let</span> <span class="const-code">$1</span>'
      )
      .replace(/\d+/g, '<span class="number-code">$&</span>')
      .replaceAll("[", `<span class = "square-brackets-code">[</span>`)
      .replaceAll("]", `<span class = "square-brackets-code">]</span>`)
      .replaceAll("(", `<span class = "parentheses-code">(</span>`)
      .replaceAll(")", `<span class = "parentheses-code">)</span>`)
      .replaceAll("{", `<span class = "brace-code">{</span>`)
      .replaceAll("}", `<span class = "brace-code">}</span>`);

    dispatch({ type: "CHANGE_INPUT", payload: hightLightCode });
  }, [code]);

  const onChangeHandler = (e) => setCode(e.target.value);

  const onKeyDownHandler = (e) => {
    if (e.keyCode === 9) {
      e.preventDefault();
      let val = e.target.value;
      let start = e.target.selectionStart;
      let end = e.target.selectionEnd;
      const tabSpaces = "    ";
      e.target.value = val.substring(0, start) + tabSpaces + val.substring(end);
      e.target.selectionStart = e.target.selectionEnd = start + tabSpaces.length;
      setCode(e.target.value);
    }
  };

  return (
    <textarea
      className="editor-form"
      value={code}
      autoComplete="false"
      spellCheck="false"
      onChange={onChangeHandler}
      onKeyDown={onKeyDownHandler}
    />
  );
};

export { EditorForm };
