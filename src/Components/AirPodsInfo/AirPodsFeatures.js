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
    imageScr: "./Content_features/tile_onetap_setup_large.jpg",
    imageAlt: "onetap_setup",
    content: (
      <InsideMessage>
        Connect immediately to your iPhone or iPad.<sup>1</sup>
      </InsideMessage>
    ),
  },
  {
    key: "n2",
    title: "Personalized Spatial Audio",
    imageScr: "./Content_features/tile_spatial_audio_large.jpg",
    imageAlt: "spatial_audio",
    content: (
      <InsideMessage>
        Personalized Spatial Audio plays three-dimensional sound tuned for your
        specific ear shape — across all your devices.<sup>2</sup>
      </InsideMessage>
    ),
  },
  {
    key: "n3",
    title: "Audio Sharing",
    imageScr: "./Content_features/tile_audio_sharing_large.jpg",
    imageAlt: "audio_sharing",
    content: (
      <InsideMessage>
        Share a song, podcast, or other audio between two sets of AirPods with
        Audio Sharing.<sup>3</sup>
      </InsideMessage>
    ),
  },
  {
    key: "n4",
    title: "Automatic switching",
    imageScr: "./Content_features/tile_automatic_switching_large.jpg",
    imageAlt: "automatic_switching",
    content: (
      <InsideMessage>
        Automatic switching allows sound to move seamlessly between your iPhone,
        Apple Watch, iPad, Mac, and Apple TV.<sup>1</sup>
      </InsideMessage>
    ),
  },
  {
    key: "n5",
    title: "Siri",
    imageScr: "./Content_features/tile_siri_large.jpg",
    imageAlt: "siri",
    content: (
      <InsideMessage>
        A simple “Hey Siri” summons your favorite personal assistant. Control
        your music, calls, volume, directions, and more — without lifting a
        finger.
      </InsideMessage>
    ),
  },
  {
    key: "n6",
    title: "Accessibility",
    imageScr: "./Content_features/tile_accessibility_large.jpg",
    imageAlt: "accessibility",
    content: (
      <InsideMessage>
        AirPods are loaded with features to assist with select hearing needs,
        from focusing on the voice in front of you in noisy surroundings to
        amplifying the frequencies you may need to hear more clearly.
      </InsideMessage>
    ),
  },
];

function AirPodsFeatures() {
  const featuresBarRef = useRef();
  const [isLeft, setLeft] = useState(true);
  const [isRight, setRight] = useState(false);

  const scrollHandler = (event) => {
    setLeft(event.target.scrollLeft === 0);
    if (event.target.clientWidth >= 1200) {
      setRight(event.target.scrollLeft === 1600);
    } else {
      setRight(event.target.scrollLeft === 2000);
    }
  };

  const scrollLeftHandler = () => {
    if(featuresBarRef.current.scrollLeft%400 === 0){
    featuresBarRef.current.scrollLeft -= 400;}
  };
  const scrollRightHandler = () => {
    if(featuresBarRef.current.scrollLeft%400 === 0){
      featuresBarRef.current.scrollLeft += 400;}
    }
  ;

  return (
    <div>
      <FeaturesBar ref={featuresBarRef} onScroll={scrollHandler}>
        {airPodsFeatures.map((featuredata) => (
          <AirPodsFeature data={featuredata} key={featuredata.key} />
        ))}
        <Space />
      </FeaturesBar>
      <ScrollButtons>
        <ScrollLeftButton
          disabled={isLeft}
          onClick={() => setTimeout(scrollLeftHandler, 200)}
        >
          <FontAwesomeIcon icon={faArrowAltCircleLeft} />
        </ScrollLeftButton>
        <ScrollRightButton
          disabled={isRight}
          onClick={() => setTimeout(scrollRightHandler, 200)}
        >
          <FontAwesomeIcon icon={faArrowAltCircleRight} />
        </ScrollRightButton>
      </ScrollButtons>
    </div>
  );
}

export default AirPodsFeatures;
