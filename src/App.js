import Toolbar from "./components/Toolbar/toolbar";
//import HomePage from './components/HomePage/home_page';
import SplitView from "./components/SplitView/split_view";
import "./app.css";
import MusicView from "./components/MusicView/music_view";

function App() {
  return (
    <div className="app">
      <Toolbar />
      <SplitView />
      <MusicView />
    </div>
  );
}

export default App;
