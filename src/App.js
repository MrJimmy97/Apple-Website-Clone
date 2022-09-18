import NavBar from "./Components/NavBar/NavBar";
import AirPodsIntroductions from "./Components/AirPodsInfo/AirPodsIntroductions";
import MessageTitle from "./Components/ReusesableComponents/MessageTitle";
import AirPodsFeatures from "./Components/AirPodsInfo/AirPodsFeatures";
import AirPodsCompares from "./Components/AirPodsInfo/AirPodsCompares";
import Services from "./Components/ServicesAndNotes/Services";
import Notes from "./Components/ServicesAndNotes/Notes";
import AboutApple from "./Components/AboutApple/AboutApple";


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
      <Notes/>
      <AboutApple/>
    </div>
  );
}

export default App;
