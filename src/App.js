import { css } from "styled-components/macro";
import NavBar from "./Components/NavBar/NavBar";
import AirPodsIntroductions from "./Components/AirPodsInfo/AirPodsIntroductions";
import MessageTitle from "./Components/ReusesableComponents/MessageTitle";
import AirPodsFeatures from "./Components/AirPodsInfo/AirPodsFeatures";
import AirPodsCompares from "./Components/AirPodsInfo/AirPodsCompares";
import Services from "./Components/ServicesAndNotes/Services";
import Notes from "./Components/ServicesAndNotes/Notes";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div >
      <NavBar />
      <AirPodsIntroductions />
      <MessageTitle>
        A magical connection to
        <br /> your devices.
      </MessageTitle>
      <AirPodsFeatures />
      <div css="display: flex;flex-direction:column; align-items: center">
        <MessageTitle>
          Which AirPods are
          <br />
          right for you?
        </MessageTitle>
        <AirPodsCompares />
        <Services />
        <Notes />
        <Footer />
      </div>
    </div>
  );
}

export default App;
