import Toolbar from "./components/Toolbar/toolbar";
import SplitView from "./components/SplitView/split_view";
import AudioButton from "./components/AudioButton/audio_button";
import HomePage from "./components/HomePage/home_page";

function App() {
  return (
    <div className="app">
      <Toolbar />
      <SplitView />
      <HomePage />
      <AudioButton />
    </div>
  );
}

export default App;
