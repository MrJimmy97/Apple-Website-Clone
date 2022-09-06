import NavBar from "./Components/NavBar/NavBar";
import AirPodsIntroductions from "./Components/MainContent/AirPodsIntroductions";
import MessageTitle from "./Components/UI/MessageTitle";
import AirPodsFeatures from "./Components/MainContent/AirPodsFeatures";

function App() {
  return (
    <div>
      <NavBar />
      <AirPodsIntroductions />
      <MessageTitle>A magical connection to<br/> your devices.</MessageTitle>
      <AirPodsFeatures/>
    </div>
  );
}

export default App;
