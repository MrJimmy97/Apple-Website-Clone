import styled from "styled-components";
import { useRef, useState } from "react";
import AirPodsBox from "./AirPodsBox";
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
  left: 94%;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;
const AirPodsProContentBox = styled.div`
  text-align: center;
  margin-bottom: 180px;
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
const AirPodsMaxBox = styled.div`
  text-align: center;
  margin-bottom: 200px;
  & > h2 {
    margin: 0;
    font-size: 200px;
  }
  & > div {
    font-size: 20px;
  }
`;
const AirPodsMax = styled.img`
  top: calc((680px - 520px) / 2);
  left: calc(50% - 470px / 2);
  width: 470px;
`;
const AirPods2ndBox = styled.div`
  margin-bottom: 200px;
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

function AirPodsIntroduction() {
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
      <AirPodsBox>
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
      </AirPodsBox>
      <AirPodsBox>
        <AirPodsProLeft
          src="/Content_Introduction/airpods_pro_left_large.png"
          alt="airpods_pro_left_large"
        />
        <AirPodsProRight
          src="/Content_Introduction/airpods_pro_right_large.png"
          alt="airpods_pro_right_large"
        />
        <AirPodsProContentBox>
          <h2>AirPods Pro</h2>
          <div>HK$1,999</div>
        </AirPodsProContentBox>
      </AirPodsBox>
      <AirPodsBox>
        <AirPodsMaxBox>
          <h2>AirPods Max</h2>
          <div>HK$4,599</div>
        </AirPodsMaxBox>
        <AirPodsMax src="/Content_Introduction/airpods_max_large.png" alt="airpods_max_large" />
      </AirPodsBox>
      <AirPodsBox>
        {/* l:366px r:319px  */}
        <AirPods2ndLeft
          src="/Content_Introduction/airpods_2nd_left_large.png"
          alt="airpods_2nd_left_large"
        />
        <AirPods2ndRight
          src="/Content_Introduction/airpods_2nd_right_large.png"
          alt="airpods_2nd_right_large"
        />
        <AirPods2ndBox>
          <h2>AirPods</h2>
          <h3>2nd generation</h3>
          <div>HK$1,099</div>
        </AirPods2ndBox>
      </AirPodsBox>
    </Container>
  );
};

export default AirPodsIntroduction;
