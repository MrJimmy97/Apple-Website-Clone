import NavBar from "./Components/NavBar/NavBar";
import AirPodsIntroduction from "./Components/ContentPage/AirPodsIntroduction";
import MessageTitle from "../UI/MessageTitle";

function App() {
  return (
    <div>
      <NavBar />
      <AirPodsIntroduction />
      <MessageTitle>A magical connection to<br/> your devices.</MessageTitle>
    </div>
  );
}

export default App;
