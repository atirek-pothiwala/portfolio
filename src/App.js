import Toolbar from "./components/Toolbar/toolbar";
//import HomePage from './components/HomePage/home_page';
import SplitView from "./components/SplitView/split_view";
import "./app.css";

function App() {
  return (
    <div className="app">
      <Toolbar />
      <SplitView />
    </div>
  );
}

export default App;
