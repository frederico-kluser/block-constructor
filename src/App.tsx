import Edition from "./pages/Edition";
import { EditorProvider } from "./store/contextAPI";

const App = () => (
  <EditorProvider>
    <Edition />
  </EditorProvider>
);

export default App;
