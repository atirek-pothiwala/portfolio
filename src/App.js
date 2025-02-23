import Toolbar from "./components/Toolbar/toolbar";
import SplitView from "./components/SplitView/split_view";
import AudioButton from "./components/AudioButton/audio_button";
import HireView from "./components/HireView/hire_view";

function App() {
  return (
    <div className="app">
      <Toolbar />
      <SplitView />
      <HireView />
      <AudioButton />
    </div>
  );
}

export default App;
