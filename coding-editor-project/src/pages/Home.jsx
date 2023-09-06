import { EditorCode, EditorForm, EditorTemplate } from "../features/editor/component";
import EditorContainer from "../features/editor/container/EditorContainer";

const Home = () => {
  return (
    <EditorContainer>
      <EditorTemplate>
        <EditorForm />
        <EditorCode />
      </EditorTemplate>
    </EditorContainer>
  );
};

export default Home;
