import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-regular-svg-icons";
import { useRef, useState, useEffect, useCallback } from "react";
import AirPodsFunctionBox from "./AirPodsFunctionbox";

const FunctionItemBar = styled.div`
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

const SpaceWrapper = styled.div`
  min-width: 719px;
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
    cursor: pointer;
  }
`;
const ScrollLeftButton = styled.button`
  opacity: ${(props) => (props.disabled && 0.5)};
`;
const ScrollRightButton = styled.button`
  opacity: ${(props) => (props.disabled && 0.5)};
`;

const airPodsInfo = [
  {
    key: "n1",
    title: "One-tap setup",
    imageScr: "./Content_function/tile_onetap_setup.jpg",
    imageAlt: "onetap_setup",
    content: (
      <InsideMessage>
        Connect immediately to your iPhone or iPad.
      </InsideMessage>
    ),
  },
  {
    key: "n2",
    title: "Automatic switching",
    imageScr: "./Content_function/tile_automatic_switching.jpg",
    imageAlt: "automatic_switching",
    content: (
      <InsideMessage>
        Automatic switching allows sound to move seamlessly between your
        iPhone, Apple Watch, iPad, Mac, and Apple TV<sup>1</sup>.
      </InsideMessage>
    ),
  },
  {
    key: "n3",
    title: "Audio Sharing",
    imageScr: "./Content_function/tile_audio_sharing.jpg",
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
    imageScr: "./Content_function/tile_always_on_siri.png",
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
    imageScr: "./Content_function/tile_announce_notifications.png",
    imageAlt: "announce_notifications",
    content: (
      <InsideMessage>
        Siri can read your important messages or alerts as they arrive —
        unless you're on a call or listening to music. You can even reply to
        messages without opening your device.<sup>3</sup>
      </InsideMessage>
    ),
  },
];

function AirPodsFunction() {
  const functionBarRef = useRef(null);
  // const functionBarRefWrapper = useCallback((node) => {if (node !== null){
  //   functionBarRef.current.scrollLeft =
  //   console.log(node.scrollLeft);

  // }
  // },[]);

  // const [sliderScrollLeft, setsliderScrollScroll] = useState(0);
  const [isLeft, setLeft] = useState(true);
  const [isRight, setRight] = useState(false);
  const handleScroll = (event) => {
    setLeft(event.target.scrollLeft === 0)
    setRight(event.target.scrollLeft >= 1200)
  };

  const slideLeftHandler = () => {
    console.log(`1.${functionBarRef.current.scrollLeft}`);
    functionBarRef.current.scrollLeft -= 400;
    // console.log(`1.${sliderScrollLeft}`);
    // functionBarRef.current.scrollLeft -= 400;
    // setsliderScrollScroll(functionBarRef.current.scrollLeft);
    // console.log(`2.${sliderScrollLeft}`);
    // if (functionBarRef.current.scrollLeft >= 0) {
    //   setLeftBlack(true);
    // } else if (functionBarRef.current.scrollLeft >= 1200) {
    //   setRightBlack(false);
    // }
  };
  const slideRightHandler = () => {
    console.log(`1.${functionBarRef.current.scrollLeft}`);
    functionBarRef.current.scrollLeft += 400;
    // console.log(`1.${functionBarRef}`);
    // functionBarRef.current.scrollLeft += 400;
    // setsliderScrollScroll(functionBarRef.current.scrollLeft);
    // console.log(`2.${sliderScrollLeft}`);
    // if (functionBarRef.current.scrollLeft >= 0) {
    //   setLeftBlack(true);
    // } else if (functionBarRef.current.scrollLeft >= 1200) {
    //   setRightBlack(false);
    // }
  };

  // useEffect(() => {
  //   setsliderScrollScroll(functionBarRef.current.scrollLeft);
  //    console.log(sliderScrollLeft); }, [sliderScrollLeft])

  return (
    <div>
      <FunctionItemBar ref={functionBarRef} onScroll={handleScroll}>
        {airPodsInfo.map((functiondata) => (
          <AirPodsFunctionBox
            title={functiondata.title}
            imageScr={functiondata.imageScr}
            imageAlt={functiondata.imageAlt}
            content={functiondata.content}
            key={functiondata.key}
          />
        ))}
        <SpaceWrapper />
      </FunctionItemBar>
      <ScrollButtons>
        <ScrollLeftButton
          disabled={isLeft}
          onClick={() => setTimeout(slideLeftHandler, 100)}
        >
          <FontAwesomeIcon icon={faArrowAltCircleLeft} />
        </ScrollLeftButton>
        <ScrollRightButton
          disabled={isRight}
          onClick={() => setTimeout(slideRightHandler, 100)}
        >
          <FontAwesomeIcon icon={faArrowAltCircleRight} />
        </ScrollRightButton>
      </ScrollButtons>
    </div>
  );
}

export default AirPodsFunction;
