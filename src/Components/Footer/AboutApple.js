import styled, { css } from "styled-components/macro";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleWhole } from "@fortawesome/free-solid-svg-icons";
import dictionaryData from "../Data/dictionaryData";

const Container = styled.div`
  width: 95%;
  border-bottom: none;
  font-size: 14px;

  @media (min-width: 980px) {
    width: 980px;
    border-bottom: 2px solid rgb(218, 218, 223);
  }
`;
const HomeButton = styled.button`
  background: transparent;
  border: none;
  opacity: 0.6;
  font-size: 16px;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;
const DirectorySmall = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 980px) {
    display: none;
  }
`;
const DirectoryTitleSmall = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  font-size: 10px;
  color: ${(props) =>
    props.isOpened ? " rgb(23, 54, 93)" : "rgb(145,142,145)"};
  cursor: pointer;
  &:hover {
    color: rgb(23, 54, 93);
  }
`;
const DirectoryButtonListSmall = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${(props) => props.isOpened && "slideIn 0.5s forwards"};

  @keyframes slideIn {
    from {
      transform: translateY(-50%) scaleY(0);
    }
    to {
      transform: translateY(0) scaleY(1);
    }
  }
`;
const DirectoryButtonSmall = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  font-size: 10px;
  margin: 0 0 15px 20px;
  text-align: left;
  color: rgb(23, 54, 93);
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
const PlusButton = styled.div`
  font-size: 15px;
  ${({ rotateAnimation }) => rotateAnimation}

  @keyframes crossButton-to-plusButton {
    0% {
      transform: rotate(45deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  @keyframes plusButton-to-crossButton {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(45deg);
    }
  }
`;
const DirectoryFull = styled.div`
  display: none;

  @media (min-width: 980px) {
    display: flex;
    justify-content: space-between;
  }
`;
const DirectoryButtonFull = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  font-size: 10px;
  margin-bottom: 10px;
  text-align: left;
  color: rgb(145, 142, 145);

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
const BlueButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  font-size: 10px;
  color: rgb(48, 128, 211);
  
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
function DirectoryCategorySmall({ data: { title, directoryLink } }) {
  const [isOpen, setIsOpen] = useState(false);
  const [rotateAnimation, setIsrotateAnimation] = useState("");

  return (
    <div css="border-bottom: 2px solid rgb(218, 218, 223);">
      <DirectoryTitleSmall
        onClick={() =>
          setIsOpen((current) => {
            if (current)
              setIsrotateAnimation(
                "animation: crossButton-to-plusButton 0.3s forwards;"
              );
            else
              setIsrotateAnimation(
                "animation: plusButton-to-crossButton 0.3s forwards;"
              );
            return !current;
          })
        }
        isOpened={isOpen}
      >
        <div>{title}</div>
        <PlusButton rotateAnimation={rotateAnimation}>+</PlusButton>
      </DirectoryTitleSmall>
      <DirectoryButtonListSmall isOpened={isOpen}>
        {isOpen &&
          directoryLink.map((data, i) => {
            return <DirectoryButtonSmall key={i}>{data.title}</DirectoryButtonSmall>;
          })}
      </DirectoryButtonListSmall>
    </div>
  );
}
function DirectoryCategoryFull({ data: { title, directoryLink } }) {
  return (
    <div css="display:flex;flex-direction:column;margin-bottom:23.6px">
      <div css="margin-bottom:10px;font-size:10px;font-weight:bold">
        {title}
      </div>
      {directoryLink.map((data, i) => {
        return <DirectoryButtonFull key={i}>{data.title}</DirectoryButtonFull>;
      })}
    </div>
  );
}
function AboutApple() {
  return (
    <Container>
      <div css="padding:12px 0;display:flex;border-bottom:2px solid rgb(218, 218, 223);@media (min-width:980px) {border-bottom:none;padding:10px 0;}">
        <HomeButton>
          <FontAwesomeIcon icon={faAppleWhole} />
        </HomeButton>
        <div css="margin: 0 6px;opacity:0.2;font-size:25px;user-select: none;-webkit-user-select: none;">
          &#x203A;
        </div>
        <div css="padding-top:7px "> AirPods</div>
      </div>
      <DirectorySmall>
        {dictionaryData.map((data, i) => (
          <DirectoryCategorySmall data={data} key={i} />
        ))}
      </DirectorySmall>
      <DirectoryFull>
        <div>
          <DirectoryCategoryFull data={dictionaryData[0]} />
        </div>
        <div>
          <DirectoryCategoryFull data={dictionaryData[1]} />
          <DirectoryCategoryFull data={dictionaryData[2]} />
        </div>
        <div>
          <DirectoryCategoryFull data={dictionaryData[3]} />
        </div>
        <div>
          <DirectoryCategoryFull data={dictionaryData[4]} />
          <DirectoryCategoryFull data={dictionaryData[5]} />
          <DirectoryCategoryFull data={dictionaryData[6]} />
        </div>
        <div>
          <DirectoryCategoryFull data={dictionaryData[7]} />
          <DirectoryCategoryFull data={dictionaryData[8]} />
        </div>
      </DirectoryFull>
      <div css="font-size:10px;color:rgb(99, 92, 83);margin:12px 0;@media (min-width:980px) {margin-top:0}">
        More ways to shop: <BlueButton> Find an Apple Store</BlueButton> or{" "}
        <BlueButton>other retailer</BlueButton> near you. Or call 800-908-988.
      </div>
    </Container>
  );
}

export default AboutApple;
