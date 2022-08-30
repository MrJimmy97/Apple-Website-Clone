import styled from "styled-components";
import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const Content = styled.div`
  background-color: white;
  border-radius: 16px;
  height: 484px;
  width: 403px;
  position: relative;
`;
const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > img {
    margin: 0 auto;
  }
`;
const FunctionBoxTitle = styled.h4`
  font-size: 26px;
  margin-top: 44px;
  padding-left: 40px;
`;

const ClickedMessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 38px;
  text-align: left;
  width: 70%;
  height: 100%;

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
  transform: rotate(45deg);
  cursor: pointer;
  & > :hover {
    color: rgb(107, 107, 107);
  }

  @keyframes crossButton-to-plusButton {
    from {
      transform: rotate(90deg);
    }
    to {
      transform: rotate(45deg);
    }
  }
  @keyframes plusButton-to-crossButton {
    from {
      transform: rotate(45deg);
    }
    to {
      transform: rotate(90deg);
    }
  }
`;

function AirPodsFunctionBox(props) {
  const crossButtonRef = useRef();
  const [isClicked, setIsClicked] = useState(true);
  // const [isOringal, setIsDisplay] = useState(functionboxDisplay);

  // let functionboxDisplay = (
  //   <div>
  //     <ImageWrapper>
  //       <img
  //         src="./Content_function/tile_onetap_setup__fzj1m8dhjoq6_large.jpg"
  //         alt="onetap_setup"
  //       />
  //     </ImageWrapper>
  //     <FunctionBoxTitle>One-tap setup</FunctionBoxTitle>
  //   </div>
  // );

  // functionboxDisplay = (
  //   <div>
  //     <ImageWrapper>
  //       <img
  //         src="./Content_function/tile_onetap_setup__fzj1m8dhjoq6_large.jpg"
  //         alt="onetap_setup"
  //       />
  //     </ImageWrapper>
  //     <FunctionBoxTitle>One-tap setup</FunctionBoxTitle>
  //   </div>
  // )

  const clickHandler = () => {
    if (isClicked) {
      crossButtonRef.current.style.animation =
        "plusButton-to-crossButton 1s forwards";
     ;
    } else {
      crossButtonRef.current.style.animation =
        "crossButton-to-plusButton 1s forwards";
     ;
    }
    setIsClicked((PlusIcon) => !PlusIcon);
  };
  return (
    <Content>
      <ImageWrapper>
        <img
          src="./Content_function/tile_onetap_setup__fzj1m8dhjoq6_large.jpg"
          alt="onetap_setup"
        />
      </ImageWrapper>
      <FunctionBoxTitle>One-tap setup</FunctionBoxTitle>
      <CrossButton ref={crossButtonRef} onClick={clickHandler}>
        <FontAwesomeIcon icon={faCircleXmark} />
      </CrossButton>
    </Content>
  );
}

export default AirPodsFunctionBox;
