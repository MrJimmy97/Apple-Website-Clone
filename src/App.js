import NavBar from "./Components/NavBar/NavBar";
import AirPodsIntroduction from "./Components/MainContent/AirPodsIntroduction";
import MessageTitle from "./Components/UI/MessageTitle";
import AirPodsFunction from "./Components/MainContent/AirPodsFunction";

function App() {
  return (
    <div>
      <NavBar />
      <AirPodsIntroduction />
      <MessageTitle>A magical connection to<br/> your devices.</MessageTitle>
      <AirPodsFunction/>
    </div>
  );
}

export default App;
