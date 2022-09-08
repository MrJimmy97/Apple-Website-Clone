import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-regular-svg-icons";
import { useRef, useState } from "react";
import AirPodsFeature from "./AirPodsFeature";

const FeaturesBar = styled.div`
  display: flex;
  overflow: hidden;
  scroll-behavior: smooth;
`;

const InsideMessage = styled.p`
  font-size: 19px;
  font-weight: 400;

  & > sup:hover {
    color: rgb(65, 141, 217);
    cursor: pointer;
  }
`;

const Space = styled.div`
  min-width: 750px;
  color: transparent;
`;

const ScrollButtons = styled.div`
  text-align: center;
  margin-top: 10px;

  & > button {
    background: none;
    border: none;
    font-size: 30px;
    padding: 0;
    margin: 10px 10px;
  }
`;
const ScrollLeftButton = styled.button`
  opacity: ${(props) => props.disabled && 0.5};
  cursor: ${(props) => (props.disabled ? "context-menu" : "pointer")};
`;
const ScrollRightButton = styled.button`
  opacity: ${(props) => props.disabled && 0.5};
  cursor: ${(props) => (props.disabled ? "context-menu" : "pointer")};
`;

const airPodsFeatures = [
  {
    key: "n1",
    title: "One-tap setup",
    imageScr: "./Content_features/tile_onetap_setup.jpg",
    imageAlt: "onetap_setup",
    content: (
      <InsideMessage>Connect immediately to your iPhone or iPad.</InsideMessage>
    ),
  },
  {
    key: "n2",
    title: "Automatic switching",
    imageScr: "./Content_features/tile_automatic_switching.jpg",
    imageAlt: "automatic_switching",
    content: (
      <InsideMessage>
        Automatic switching allows sound to move seamlessly between your iPhone,
        Apple Watch, iPad, Mac, and Apple TV<sup>1</sup>.
      </InsideMessage>
    ),
  },
  {
    key: "n3",
    title: "Audio Sharing",
    imageScr: "./Content_features/tile_audio_sharing.jpg",
    imageAlt: "audio_sharing",
    content: (
      <InsideMessage>
        Share a song, podcast, or other audio between two sets of AirPods with
        Audio Sharing<sup>2</sup>.
      </InsideMessage>
    ),
  },
  {
    key: "n4",
    title: "Always-on Siri",
    imageScr: "./Content_features/tile_always_on_siri.png",
    imageAlt: "always_on_siri",
    content: (
      <InsideMessage>
        A simple “Hey Siri” summons your favorite personal assistant. Control
        your music, calls, volume, directions, and more — without lifting a
        finger.
      </InsideMessage>
    ),
  },
  {
    key: "n5",
    title: "Announce Notifications",
    imageScr: "./Content_features/tile_announce_notifications.png",
    imageAlt: "announce_notifications",
    content: (
      <InsideMessage>
        Siri can read your important messages or alerts as they arrive — unless
        you're on a call or listening to music. You can even reply to messages
        without opening your device.<sup>3</sup>
      </InsideMessage>
    ),
  },
];

function AirPodsFeatures() {
  const featuresBarRef = useRef();
  const [isLeft, setLeft] = useState(true);
  const [isRight, setRight] = useState(false);

  const ScrollHandler = (event) => {
    setLeft(event.target.scrollLeft === 0);
    if (event.target.clientWidth >= 1200) {
      setRight(event.target.scrollLeft === 1200);
    } else {
      setRight(event.target.scrollLeft === 1600);
    }
  };

  return (
    <div>
      <FeaturesBar ref={featuresBarRef} onScroll={ScrollHandler}>
        {airPodsFeatures.map((featuredata) => (
          <AirPodsFeature
            title={featuredata.title}
            imageScr={featuredata.imageScr}
            imageAlt={featuredata.imageAlt}
            content={featuredata.content}
            key={featuredata.key}
          />
        ))}
        <Space />
      </FeaturesBar>
      <ScrollButtons>
        <ScrollLeftButton
          disabled={isLeft}
          onClick={() =>
            setTimeout(() => {
              featuresBarRef.current.scrollLeft -= 400;
            }, 100)
          }
        >
          <FontAwesomeIcon icon={faArrowAltCircleLeft} />
        </ScrollLeftButton>
        <ScrollRightButton
          disabled={isRight}
          onClick={() =>
            setTimeout(() => {
              featuresBarRef.current.scrollLeft += 400;
            }, 100)
          }
        >
          <FontAwesomeIcon icon={faArrowAltCircleRight} />
        </ScrollRightButton>
      </ScrollButtons>
    </div>
  );
}

export default AirPodsFeatures;
