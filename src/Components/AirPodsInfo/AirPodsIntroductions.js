import styled, { css } from "styled-components/macro";
import { useRef, useState } from "react";
import AirPodsIntroduction from "./AirPodsIntroduction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faCirclePause,
} from "@fortawesome/free-regular-svg-icons";
import airPodsData from "../airPodsData";

const Section = styled.div`
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
const AirPods3rd = styled.img`
  top: -6%;
  left: calc(50% - 800px / 2);
  width: 800px;
  @media (min-width: 980px) {
    top: -7%;
    left: calc(50% - 1028px / 2);
    width: 1028px;
  }
`;
const AirPods2ndLeft = styled.img`
  top: 10%;
  left: calc(42% - 255px);
  width: 255px;
  @media (min-width: 980px) {
    top: 10%;
    left: calc(42% - 366px);
    width: 366px;
  }
`;
const AirPods2ndRight = styled.img`
  top: 40%;
  left: 56%;
  width: 230px;
  @media (min-width: 980px) {
    top: 40%;
    left: 56%;
    width: 319px;
  }
`;
const AirPodsMax = styled.img`
  top: 25%;
  left: calc(50% - 307px / 2);
  width: 307px;
  @media (min-width: 980px) {
    top: 10%;
    left: calc(50% - 470px / 2);
    width: 470px;
  }
`;
const Content = styled.div`
  text-align: center;
  white-space: nowrap;
  position: relative;
  color: ${(props) => (props.isBlackTheme ? "white" : "black")};
  font-size: 20px;
  & > h2,
  h3 {
    margin: 0px 0 4px 0;
  }
`;

function AirPodsContent({
  size,
  isBlackTheme,
  productName,
  generation,
  price,
}) {
  return (
    <Content isBlackTheme={isBlackTheme}>
      <h2 css={size}>{productName}</h2>
      <h3>{generation}</h3>
      <div>{price}</div>
    </Content>
  );
}
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
    <Section>
      <AirPodsIntroduction isBlackTheme={true}>
        <VideoBackground ref={videoRef} autoPlay muted loop>
          <source
            src="/Content_Introductions/AirPodsPro_Video.mp4"
            type="video/mp4"
          />
        </VideoBackground>
        <AirPodsContent
          productName={airPodsData[2].productName}
          price={airPodsData[2].price}
          isBlackTheme={true}
          size="font-size:90px; @media (min-width: 980px) {font-size:120px;}"
        />
        <PlayButton onClick={PlayPauseHandler}>
          <FontAwesomeIcon icon={isPlay ? faCirclePause : faCirclePlay} />
        </PlayButton>
      </AirPodsIntroduction>
      <AirPodsIntroduction isBlackTheme={false}>
        <AirPods3rd
          src="/Content_Introductions/airpods_3rd_large.jpg"
          alt="airpods_3rd_large"
        />
        <AirPodsContent
          productName={airPodsData[1].productName}
          generation={airPodsData[1].generation}
          price={airPodsData[1].price}
          size="font-size:90px; @media (min-width: 980px) {font-size:120px;}"
        />
      </AirPodsIntroduction>
      <AirPodsIntroduction isBlackTheme={false}>
        {/* l:366px r:319px  */}
        <AirPods2ndLeft
          src="/Content_Introductions/airpods_2nd_left_large.png"
          alt="airpods_2nd_left_large"
        />
        <AirPods2ndRight
          src="/Content_Introductions/airpods_2nd_right_large.png"
          alt="airpods_2nd_right_large"
        />
        <AirPodsContent
          productName={airPodsData[0].productName}
          generation={airPodsData[0].generation}
          price={airPodsData[0].price}
          isBlackTheme={false}
          size="font-size:90px; @media (min-width: 980px) {font-size:120px;}"
        />
      </AirPodsIntroduction>
      <AirPodsIntroduction isBlackTheme={false}>
        <AirPodsContent
          productName={airPodsData[3].productName}
          price={airPodsData[3].price}
          blackColorTheme={false}
          size="font-size:110px; @media (min-width: 980px) {font-size:180px;}"
        />
        <AirPodsMax
          src="/Content_Introductions/airpods_max_large.png"
          alt="airpods_max_large"
        />
      </AirPodsIntroduction>
    </Section>
  );
}

export default AirPodsIntroductions;
