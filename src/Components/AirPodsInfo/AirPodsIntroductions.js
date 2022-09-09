import styled, { css } from "styled-components/macro";
import { useRef, useState } from "react";
import AirPodsIntroduction from "./AirPodsIntroduction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faCirclePause,
} from "@fortawesome/free-regular-svg-icons";

const IndroductionContainer = styled.div`
  background: linear-gradient(white 0%, transparent 10%);
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const VideoBackground = styled.video`
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

const PlayButton = styled.button`
  position: absolute;
  background-color: transparent;
  border: none;
  font-size: 40px;
  color: rgb(216, 216, 216);
  bottom: 30px;
  right: 3%;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;

const AirPodsContent = styled.div`
  text-align: center;
  & > h2 {
    margin: 0px 0 4px 0;
  }
  & > h3 {
    margin: 0 0 4px 0;
    font-size: 20px;
  }
  & > div {
    font-size: 20px;
  }
`;

const AirPods3rd = styled.img`
  top: -10%;
  left: 3%;
`;

const AirPods2ndLeft = styled.img`
  top: 10%;
  left: calc(42% - 366px);
`;
const AirPods2ndRight = styled.img`
  top: 40%;
  left: 56%;
`;

const AirPodsMax = styled.img`
  top: 10%;
  left: calc(50% - 470px / 2);
  width: 470px;
`;

function AirPodsIntroductions() {
  const [isPlay, setPlayPause] = useState(true);
  const videoRef = useRef();
  const PlayPauseHandler = () => {
    if (isPlay) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlayPause((current) => !current);
  };
  return (
    <IndroductionContainer>
      <AirPodsIntroduction blackColorTheme = {true}>
        <VideoBackground ref={videoRef} autoPlay muted loop>
          <source
            src="/Content_Introductions/AirPodsPro_Video.mp4"
            type="video/mp4"
          />
        </VideoBackground>
        <AirPodsContent>
          <h2 css="font-size: 120px">AirPods Pro</h2>
          <div>HK$1,849</div>
        </AirPodsContent>
        <PlayButton onClick={PlayPauseHandler}>
          <FontAwesomeIcon icon={isPlay ? faCirclePause : faCirclePlay} />
        </PlayButton>
      </AirPodsIntroduction>

      <AirPodsIntroduction blackColorTheme = {false}>
        <AirPods3rd
          src="/Content_Introductions/airpods_3rd_large.jpg"
          alt="airpods_3rd_large"
        />
        
        <AirPodsContent>
          <h2 css="font-size: 120px">AirPods</h2>
          <h3>3rd generation</h3>
          <div>From HK$1,399</div>
        </AirPodsContent>
      </AirPodsIntroduction>

      <AirPodsIntroduction blackColorTheme = {false}>
        {/* l:366px r:319px  */}
        <AirPods2ndLeft
          src="/Content_Introductions/airpods_2nd_left_large.png"
          alt="airpods_2nd_left_large"
        />
        <AirPods2ndRight
          src="/Content_Introductions/airpods_2nd_right_large.png"
          alt="airpods_2nd_right_large"
        />
        <AirPodsContent>
          <h2 css="font-size: 120px">AirPods</h2>
          <h3>2nd generation</h3>
          <div>HK$1,099</div>
        </AirPodsContent>
      </AirPodsIntroduction>

      <AirPodsIntroduction blackColorTheme = {false}>
        <AirPodsContent>
          <h2 css="font-size: 180px">AirPods Max</h2>
          <div>HK$4,599</div>
        </AirPodsContent>
        <AirPodsMax
          src="/Content_Introductions/airpods_max_large.png"
          alt="airpods_max_large"
        />
      </AirPodsIntroduction>
    </IndroductionContainer>
  );
}

export default AirPodsIntroductions;
