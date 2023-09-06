import { createContext, useContext, useReducer } from "react";

const EditorContext = createContext(null);

const initalState = {
  hightLightCode: "",
};

const editorReducer = (state = initalState, action) => {
  switch (action.type) {
    case "CHANGE_INPUT":
      return { ...state, hightLightCode: action.payload };
    default:
      return state;
  }
};

const EditorContainer = ({ children }) => {
  const [state, dispatch] = useReducer(editorReducer, initalState);

  console.log(state);

  return <EditorContext.Provider value={{ state, dispatch }}>{children}</EditorContext.Provider>;
};

const useEditorState = () => {
  const { state } = useContext(EditorContext);
  return state;
};

const useEditorDispatch = () => {
  const { dispatch } = useContext(EditorContext);
  return dispatch;
};

export { useEditorState, useEditorDispatch };

export default EditorContainer;
