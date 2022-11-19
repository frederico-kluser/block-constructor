import Block from "./components/Block";
import Edition from "./pages/Edition";
import getRandomColor from "./utils/random-color";

const App = () => (
  <div>
    <Edition />
    {/* <Block backgroundColor={getRandomColor()} /> */}
  </div>
);

export default App;
