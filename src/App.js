import NavBar from "./Components/NavBar/NavBar";
import AirPodsIntroduction from "./Components/MainContent/AirPodsIntroduction";
import MessageTitle from "./Components/UI/MessageTitle";
import AirPodsFeatures from "./Components/MainContent/AirPodsFeatures";

function App() {
  return (
    <div>
      <NavBar />
      <AirPodsIntroduction />
      <MessageTitle>A magical connection to<br/> your devices.</MessageTitle>
      <AirPodsFeatures/>
    </div>
  );
}

export default App;
