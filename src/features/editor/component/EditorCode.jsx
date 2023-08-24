import React from "react";
import "./EditorCode.scss";

const EditorCode = ({ code }) => {
  return (
    <pre className="editor-code">
      <code dangerouslySetInnerHTML={{ __html: code }}></code>
    </pre>
  );
};

export { EditorCode };
