import styled from "styled-components";
import { useRef, useState } from "react";
import AirPodsIntroduction from "./AirPodsIntroduction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay,faCirclePause } from "@fortawesome/free-regular-svg-icons";

const Container = styled.div`
  background: linear-gradient(white 30%, transparent 70%);
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
  width: 100%;`

const Airpods3rdBoxContent = styled.div`
  margin-bottom: 16px;
  text-align: center;
  & > h2 {
    margin: 300px 0 4px 0;
    font-size: 120px;
  }
  & > h3 {
    margin: 0 0 4px 0;
    font-size: 20px;
  }
  & > div {
    font-size: 20px;
  }
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
const AirPodsProContent= styled.div`
  text-align: center;
  margin:0px;
  & > h2 {
    margin: 0 0 4px 0;
    font-size: 120px;
  }
  & > div {
    font-size: 20px;
  }
`;
const AirPodsProLeft = styled.img`
  top: calc((680px - 541px) / 2);
  left: calc(48% - 390px);
`;
const AirPodsProRight = styled.img`
  top: calc((680px - 541px) / 2);
  left: 52%;
  height: 541px;
`;
const AirPodsMaxContent = styled.div`
  text-align: center;
  margin: 0px;
  & > h2 {
    margin: 0;
    font-size: 180px;
  }
  & > div {
    font-size: 20px;
  }
`;
const AirPodsMax = styled.img`
  top: 10%;
  left: calc(50% - 470px / 2);
  width: 470px;
`;
const AirPods2ndContent = styled.div`
  margin: 0px;
  text-align: center;
  & > h2 {
    margin: 0 0 4px 0;
    font-size: 120px;
  }
  & > h3 {
    margin: 0 0 4px 0;
    font-size: 20px;
  }
  & > div {
    font-size: 20px;
  }
`;
const AirPods2ndLeft = styled.img`
  top: 10%;
  left: calc(42% - 366px);
`;
const AirPods2ndRight = styled.img`
  top: 40%;
  left: 56%;
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
    setPlayPause((cur) => !cur);
  };
  return (
    <Container>
      <AirPodsIntroduction>
        <VideoBackground ref={videoRef} autoPlay muted loop>
          <source src="/Content_Introduction/large_2x.mp4" type="video/mp4" />
        </VideoBackground>
        <Airpods3rdBoxContent>
          <h2>AirPods</h2>
          <h3>3rd generation</h3>
          <div>HK$1,499</div>
        </Airpods3rdBoxContent>
        <PlayButton onClick={PlayPauseHandler}>
          <FontAwesomeIcon icon={isPlay?faCirclePause:faCirclePlay} />
        </PlayButton>
      </AirPodsIntroduction>
      <AirPodsIntroduction>
        <AirPodsProLeft
          src="/Content_Introduction/airpods_pro_left_large.png"
          alt="airpods_pro_left_large"
        />
        <AirPodsProRight
          src="/Content_Introduction/airpods_pro_right_large.png"
          alt="airpods_pro_right_large"
        />
        <AirPodsProContent>
          <h2>AirPods Pro</h2>
          <div>HK$1,999</div>
        </AirPodsProContent>
      </AirPodsIntroduction>
      <AirPodsIntroduction>
        <AirPodsMaxContent>
          <h2>AirPods Max</h2>
          <div>HK$4,599</div>
        </AirPodsMaxContent>
        <AirPodsMax src="/Content_Introduction/airpods_max_large.png" alt="airpods_max_large" />
      </AirPodsIntroduction>
      <AirPodsIntroduction>
        {/* l:366px r:319px  */}
        <AirPods2ndLeft
          src="/Content_Introduction/airpods_2nd_left_large.png"
          alt="airpods_2nd_left_large"
        />
        <AirPods2ndRight
          src="/Content_Introduction/airpods_2nd_right_large.png"
          alt="airpods_2nd_right_large"
        />
        <AirPods2ndContent>
          <h2>AirPods</h2>
          <h3>2nd generation</h3>
          <div>HK$1,099</div>
        </AirPods2ndContent>
      </AirPodsIntroduction>
    </Container>
  );
};

export default AirPodsIntroductions;
