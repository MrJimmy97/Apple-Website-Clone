import styled from "styled-components/macro";
import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const Content = styled.div`
  background-color: white;
  border-radius: 16px;
  height: 484px;
  min-width: 403px;
  margin-left: 20px;
  position: relative;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ImageWrapper = styled.div`
  width: 403px;
  height: 375px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: fadein 0.5s forwards;

  & > img {
    margin: 0 auto;
  }
`;

const FunctionBoxTitle = styled.h4`
  font-size: 24px;
  margin-top: 44px;
  padding-left: 40px;
  font-weight: 600;
`;

const ClickedMessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 38px;
  text-align: left;
  width: 70%;
  height: 100%;
  animation: fadein 0.5s forwards;

  & > h4 {
    font-size: 24px;

    margin: 0 0 20px 0;
  }
  & > p {
    font-size: 19px;
    margin: 0;
  }
`;
const CrossButton = styled.button`
  position: absolute;
  background: transparent;
  border: none;
  font-size: 40px;
  left: 80%;
  top: 85%;
  animation: ${(props) =>
    props.isClicked
      ? "crossButton-to-plusButton 0.5s forwards"
      : "plusButton-to-crossButton 0.5s forwards"};

  @keyframes crossButton-to-plusButton {
    0% {
      transform: rotate(90deg);
    }
    100% {
      transform: rotate(45deg);
    }
  }
  @keyframes plusButton-to-crossButton {
    0% {
      transform: rotate(45deg);
    }
    100% {
      transform: rotate(90deg);
    }
  }

  cursor: pointer;
  & > :hover {
    color: rgb(107, 107, 107);
  }
`;

function AirPodsFunctionBox({ imageScr, imageAlt, content, title }) {
  const crossButtonRef = useRef();
  const [isClicked, setIsClicked] = useState(true);

  return (
    <Content>
      {isClicked ? (
        <div>
          <ImageWrapper>
            <img src={imageScr} alt={imageAlt} />
          </ImageWrapper>
          <FunctionBoxTitle>{title}</FunctionBoxTitle>
        </div>
      ) : (
        <ClickedMessageWrapper>
          <h4>{title}</h4>
          <p>{content}</p>
        </ClickedMessageWrapper>
      )}
      <CrossButton
        ref={crossButtonRef}
        onClick={() => setIsClicked((current) => !current)}
        isClicked={isClicked}
      >
        <FontAwesomeIcon icon={faCircleXmark} />
      </CrossButton>
    </Content>
  );
}

export default AirPodsFunctionBox;
