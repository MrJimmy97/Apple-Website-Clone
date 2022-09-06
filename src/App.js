import NavBar from "./Components/NavBar/NavBar";
import AirPodsIntroductions from "./Components/AirPodsInfo/AirPodsIntroductions";
import MessageTitle from "./Components/MessageTitle";
import AirPodsFeatures from "./Components/AirPodsInfo/AirPodsFeatures";

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
