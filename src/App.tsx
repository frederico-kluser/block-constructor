import Block from "./components/Block";
import getRandomColor from "./utils/random-color";

const App = () => (
  <div style={{
    position: "absolute",
    left: '50%',
    top: '50%',
  }}>
    <Block backgroundColor={getRandomColor()} />
  </div>
);

export default App;
