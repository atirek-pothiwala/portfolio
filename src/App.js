import Toolbar from "./components/Toolbar/toolbar";
import SplitView from "./components/SplitView/split_view";
import AudioButton from "./components/AudioButton/audio_button";

function App() {
  return (
    <div className="app">
      <Toolbar />
      <SplitView />
      <AudioButton />
    </div>
  );
}

export default App;
