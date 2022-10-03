import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-regular-svg-icons";
import { useRef, useState, useEffect } from "react";
import AirPodsFeature from "./AirPodsFeature";
import airPodsFeatures from "../featuresData";

const FeaturesBar = styled.div`
  display: flex;
  overflow: hidden;
  scroll-behavior: smooth;
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

function AirPodsFeatures() {
  const featuresBarRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentBoxWidth, setBoxWidth] = useState(330);
  const [maxScrollWidth, setMaxScrollWidth] = useState(4);

  useEffect(() => {
    featuresBarRef.current.scrollLeft = (currentBoxWidth + 20) * currentIndex;
  }, [currentIndex, currentBoxWidth]);

  useEffect(() => {
    if (window.innerWidth < 980) {
      setMaxScrollWidth(5);
      setBoxWidth(330);
    } else {
      setMaxScrollWidth(4);
      setBoxWidth(380);
    }
  }, [window.innerWidth]);

  return (
    <div>
      <FeaturesBar ref={featuresBarRef}>
        {airPodsFeatures.map((featuredata, i) => (
          <AirPodsFeature data={featuredata} key={i} />
        ))}
        <Space />
      </FeaturesBar>
      <ScrollButtons>
        <ScrollLeftButton
          disabled={currentIndex <= 0}
          onClick={() =>
            setTimeout(
              setCurrentIndex((current) => current - 1),
              200
            )
          }
        >
          <FontAwesomeIcon icon={faArrowAltCircleLeft} />
        </ScrollLeftButton>
        <ScrollRightButton
          disabled={currentIndex === maxScrollWidth}
          onClick={() =>
            setTimeout(
              setCurrentIndex((current) => current + 1),
              200
            )
          }
        >
          <FontAwesomeIcon icon={faArrowAltCircleRight} />
        </ScrollRightButton>
      </ScrollButtons>
    </div>
  );
}

export default AirPodsFeatures;
