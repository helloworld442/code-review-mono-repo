import { styled } from "styled-components";

const EditorTemplate = ({ children }) => {
  return <StEditorTemplate>{children}</StEditorTemplate>;
};

const StEditorTemplate = styled.div`
  position: relative;
  width: 100%;
  min-height: 700px;
`;

export { EditorTemplate };
