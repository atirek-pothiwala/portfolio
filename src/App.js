import Toolbar from "./components/toolbar";
import HomeView from "./components/home_view";
import AudioButton from "./components/audio_button";
import ProfileView from "./components/profile_view";
import ExperienceView from "./components/experience_view";
import FooterView from "./components/footer_view";
import ContactView from "./components/contact_view";
import ProjectView from "./components/projects_view";
import TechView from "./components/tech_view";

function App() {
  return (
    <section>
      <Toolbar />
      <HomeView />
      <div className="app-profile">
        <ProfileView />
        <ExperienceView />
      </div>
      <ProjectView />
      <TechView />
      <ContactView />
      <FooterView />
      <AudioButton />
    </section>
  );
}

export default App;
