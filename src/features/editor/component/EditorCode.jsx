import "./EditorCode.scss";
import { useEditorState } from "../container/EditorContainer";

const EditorCode = () => {
  const { hightLightCode } = useEditorState();

  return (
    <pre className="editor-code">
      <code dangerouslySetInnerHTML={{ __html: hightLightCode }}></code>
    </pre>
  );
};

export { EditorCode };
