import styled from "styled-components/macro";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const Content = styled.div`
  background-color: white;
  border-radius: 16px;
  height: 484px;
  min-width: 380px;
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

const Image = styled.div`
  width: 380px;
  height: 375px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: fadein 0.5s forwards;

  & > img {
    margin: 0 auto;
  }
`;

const FeatureBoxTitle = styled.h4`
  font-size: 22px;
  margin-top: 44px;
  padding-left: 20px;
  padding-right: 60px;
  font-weight: 600;
`;

const ClickedMessage = styled.div`
  padding: 100px 76px 0px 38px;
  text-align: left;
  width: 70%;
  height: 100%;
  animation: fadein 0.5s forwards;

  & > h4 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 14px;
    white-space: nowrap;
  }
  & > p {
    font-size: 19px;
    font-weight: 400;
  }
`;
const CrossButton = styled.button`
  position: absolute;
  background: transparent;
  border: none;
  font-size: 40px;
  left: 80%;
  top: 85%;
  cursor: pointer;
  animation: ${(props) =>
    props.isClicked
      ? "plusButton-to-crossButton 0.5s forwards"
      : "crossButton-to-plusButton 0.5s forwards"};

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
  & > :hover {
    color: rgb(107, 107, 107);
  }
`;

function AirPodsFeature({data:{ imageScr, imageAlt, content, title }}) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <Content>
      {isClicked ? (
        <ClickedMessage>
          <h4>{title}</h4>
          {content}
        </ClickedMessage>
      ) : (
        <div>
          <Image>
            <img src={imageScr} alt={imageAlt} />
          </Image>
          <FeatureBoxTitle>{title}</FeatureBoxTitle>
        </div>
      )}
      <CrossButton
        onClick={() => setIsClicked((current) => !current)}
        isClicked={isClicked}
      >
        <FontAwesomeIcon icon={faCircleXmark} />
      </CrossButton>
    </Content>
  );
}

export default AirPodsFeature;
