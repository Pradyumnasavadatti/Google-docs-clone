import "./App.css";
import Context from "./context/Context";
import Editor from "./editor/Editor";
import Header from "./header/header";
import GApps from "./slider/GApps";
import Slider from "./slider/Slider";
function App() {
  return (
    <div className="App">
      <Context>
        <Header />
        <Editor />
        <Slider />
        <GApps />
      </Context>
    </div>
  );
}

export default App;
