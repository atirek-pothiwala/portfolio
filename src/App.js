import Toolbar from "./components/Toolbar/toolbar";
import HomeView from "./components/HomeView/home_view";
import AudioButton from "./components/AudioButton/audio_button";
import ProfileView from "./components/ProfileView/profile_view";
import ExperienceView from "./components/ExperienceView/experience_view";
import "./App.css";

function App() {
  return (
    <section>
      <Toolbar />
      <HomeView />
      <div className="app-profile">
        <ProfileView />
        <ExperienceView />
      </div>
      <AudioButton />
    </section>
  );
}

export default App;
