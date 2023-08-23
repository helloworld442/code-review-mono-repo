import { useEffect, useState } from "react";
import "./EditorForm.scss";

const EditorForm = ({ name, label, onCode }) => {
  const [value, setValue] = useState("");

  const onChangeValue = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    onCode({ name, value });
  }, [value]);

  return (
    <textarea
      className="editor-form"
      value={value}
      onChange={onChangeValue}
      autoComplete="false"
      spellCheck="false"
    />
  );
};

export { EditorForm };
