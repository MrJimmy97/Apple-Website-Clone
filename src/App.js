import NavBar from "./Components/NavBar/NavBar";
import AirPodsIntroductions from "./Components/AirPodsInfo/AirPodsIntroductions";
import MessageTitle from "./Components/ReusesableComponents/MessageTitle";
import AirPodsFeatures from "./Components/AirPodsInfo/AirPodsFeatures";
import AirPodsCompares from "./Components/AirPodsInfo/AirPodsCompares";
import Services from "./Components/ServicesAndNotes/Services";

function App() {
  return (
    <div>
      <NavBar />
      <AirPodsIntroductions />
      <MessageTitle>
        A magical connection to
        <br /> your devices.
      </MessageTitle>
      <AirPodsFeatures />
      <MessageTitle>
        Which AirPods are
        <br />
        right for you?
      </MessageTitle>
      <AirPodsCompares/>
      <Services/>
    </div>
  );
}

export default App;
