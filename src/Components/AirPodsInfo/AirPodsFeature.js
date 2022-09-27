import styled from "styled-components/macro";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const Content = styled.div`
  background-color: white;
  border-radius: 16px;
  height: 450px;
  min-width: 330px;
  margin-left: 20px;
  position: relative;
  @media (min-width: 980px) {
    height: 484px;
    min-width: 380px;
  }
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
  height: 340px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: fadein 0.5s forwards;
  @media (min-width: 980px) {
    height: 380px;
  }
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
  font-size: 30px;
  left: 80%;
  top: 85%;
  cursor: pointer;
  animation: ${(props) =>
    props.isClicked
      ? "plusButton-to-crossButton 0.5s forwards"
      : "crossButton-to-plusButton 0.5s forwards"};

  @media (min-width: 980px) {
    font-size: 40px;
  }
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

function AirPodsFeature({
  data: { image, description, content, title, css },
}) {
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
            <img src={image} alt={description} css={css} />
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
