import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-regular-svg-icons";
import { useRef, useState } from "react";
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
  const [isLeft, setIsLeft] = useState(true);
  const [isRight, setIsRight] = useState(false);

  const scrollHandler = (event) => {
    console.log(event.target.scrollLeft, event.target.clientWidth);
    setIsLeft(event.target.scrollLeft === 0);
    if (event.target.clientWidth >= 1200) {
      setIsRight(event.target.scrollLeft === 1600);
    } else {
      setIsRight(event.target.scrollLeft === 1750);
    }
  };

  const scrollLeftHandler = () => {
    if (featuresBarRef.current.scrollLeft % 400 === 0) {
      featuresBarRef.current.scrollLeft -= 400;
    }
    if (document.documentElement.clientWidth <= 1020) {
      featuresBarRef.current.scrollLeft -= 350;
      console.log(featuresBarRef.current.scrollLeft )
    }
  };
  const scrollRightHandler = () => {
    if (featuresBarRef.current.scrollLeft % 400 === 0) {
      featuresBarRef.current.scrollLeft += 400;
    }
    if (document.documentElement.clientWidth <= 1020) {
      featuresBarRef.current.scrollLeft += 350;
      console.log(featuresBarRef.current.scrollLeft )
    }
  };
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
