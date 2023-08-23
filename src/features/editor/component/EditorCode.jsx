import { useEffect, useRef } from "react";
import "./EditorCode.scss";

const EditorCode = ({ code }) => {
  const codeRef = useRef(null);

  useEffect(() => {
    codeRef.current.scrollIntoView({ block: "end" });
  }, [code]);

  return (
    <pre className="editor-code">
      <code dangerouslySetInnerHTML={{ __html: code }}></code>
      <div ref={codeRef} className="editor-code-button" />
    </pre>
  );
};

export { EditorCode };
