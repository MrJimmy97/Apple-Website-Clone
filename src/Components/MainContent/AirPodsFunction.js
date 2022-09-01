import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-regular-svg-icons";
import AirPodsFunctionBox from "./AirPodsFunctionbox";

const FunctionItemBar = styled.div`
display: flex;
  flex-direction: row;
  padding-left: 30px;
  overflow: hidden;
`;

const ScrollButtonWrapper = styled.div`
  text-align: center;
  margin-top: 10px;
`;
const ScrollButton = styled.button`
  background: none;
  border: none;
  font-size: 30px;
  padding: 0;
  margin: 10px 10px;
  cursor: pointer;
`;

function AirPodsFunction() {
  const airPodsFunctions = [
    {
      key: "n1",
      title: "One-tap setup",
      imageScr: "./Content_function/tile_onetap_setup.jpg",
      imageAlt: "onetap_setup",
      content: "Connect immediately to your iPhone or iPad.",
    },
    {
      key: "n2",
      title: "Automatic switching",
      imageScr: "./Content_function/tile_automatic_switching.jpg",
      imageAlt: "automatic_switching",
      content:
        "Automatic switching allows sound to move seamlessly between your iPhone, Apple Watch, iPad, Mac, and Apple TV.",
    },
    {
      key: "n3",
      title: "Audio Sharing",
      imageScr: "./Content_function/tile_audio_sharing.jpg",
      imageAlt: "audio_sharing",
      content:
        "Share a song, podcast, or other audio between two sets of AirPods with Audio Sharing.",
    },
    {
      key: "n4",
      title: "Always-on Siri",
      imageScr: "./Content_function/tile_always_on_siri.png",
      imageAlt: "always_on_siri",
      content:
        "A simple “Hey Siri” summons your favorite personal assistant. Control your music, calls, volume, directions, and more — without lifting a finger.",
    },
    {
      key: "n5",
      title: "Announce Notifications",
      imageScr: "./Content_function/tile_announce_notifications.png",
      imageAlt: "announce_notifications",
      content:
        "Siri can read your important messages or alerts as they arrive — unless you're on a call or listening to music. You can even reply to messages without opening your device.",
    },
  ];
  return (
    <div>
      <FunctionItemBar>
        {airPodsFunctions.map((functiondata) => (
          <AirPodsFunctionBox
            title={functiondata.title}
            imageScr={functiondata.imageScr}
            imageAlt={functiondata.imageAlt}
            content={functiondata.content}
            key={functiondata.key}
          />
        ))}
      </FunctionItemBar>
      <ScrollButtonWrapper>
        <ScrollButton>
          <FontAwesomeIcon icon={faArrowAltCircleLeft} />
        </ScrollButton>
        <ScrollButton>
          <FontAwesomeIcon icon={faArrowAltCircleRight} />
        </ScrollButton>
      </ScrollButtonWrapper>
    </div>
  );
}

export default AirPodsFunction;
