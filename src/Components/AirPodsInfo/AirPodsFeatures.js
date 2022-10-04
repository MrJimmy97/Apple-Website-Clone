import styled, { css } from "styled-components/macro";
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

function AirPodsFeatures() {
  const featuresBarRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentBoxWidth, setBoxWidth] = useState(330);
  const [maxScrollWidth, setMaxScrollWidth] = useState(4);

  useEffect(() => {
    featuresBarRef.current.scrollLeft = (currentBoxWidth + 20) * currentIndex;
  }, [currentIndex, currentBoxWidth, ]);

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
        <div css=" min-width:750px;color: transparent;" />
      </FeaturesBar>
      <ScrollButtons>
        <button
          disabled={currentIndex <= 0}
          css={currentIndex <= 0 ? "cursor:context-menu" : "cursor:pointer"}
          onClick={() =>
            setTimeout(
              setCurrentIndex((current) => current - 1),
              200
            )
          }
        >
          <FontAwesomeIcon icon={faArrowAltCircleLeft} />
        </button>
        <button
          disabled={currentIndex === maxScrollWidth}
          css={
            currentIndex === maxScrollWidth
              ? "cursor:context-menu"
              : "cursor:pointer"
          }
          onClick={() =>
            setTimeout(
              setCurrentIndex((current) => current + 1),
              200
            )
          }
        >
          <FontAwesomeIcon icon={faArrowAltCircleRight} />
        </button>
      </ScrollButtons>
    </div>
  );
}

export default AirPodsFeatures;
