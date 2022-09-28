import styled, { css } from "styled-components/macro";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleWhole } from "@fortawesome/free-solid-svg-icons";
import dictionaryData from "../Components/dictionaryData";

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
const Container = styled.div`
  width: 95%;
  border-bottom: none;
  font-size: 14px;
  @media (min-width: 980px) {
    width: 980px;
    border-bottom: 2px solid rgb(218, 218, 223);
  }
`;
const Directory_S = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 980px) {
    display: none;
  }
`;

const DirectoryTitle_S = styled.div`
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
const DirectoryButtonList_S = styled.div`
  display: flex;
  flex-direction: column;
  animation: slideIn 3s forward;
  @keyframes slideIn {
    from {
      transform: translateY(-100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
const DirectoryButton_S = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  font-size: 10px;
  margin: 0 0 15px 20px;
  text-align: left;
  color: rgb(145, 142, 145);
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
const PlusButton = styled.div`
  animation: ${(props) =>
    props.isOpened
      ? "plusButton-to-crossButton 0.5s forwards"
      : "crossButton-to-plusButton 0.5s forwards"};
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
const Directory_F = styled.div`
  display: none;
  @media (min-width: 980px) {
    display: flex;
    justify-content: space-between;
  }
`;
const DirectoryButton_F = styled.button`
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
function DirectoryCategory_s({ data: { title, directoryLink } }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div css="border-bottom: 2px solid rgb(218, 218, 223);">
      <DirectoryTitle_S
        onClick={() => setIsOpen((cur) => !cur)}
        isOpened={isOpen}
      >
        <div>{title}</div>
        <PlusButton isOpened={isOpen}>+</PlusButton>
      </DirectoryTitle_S>
      <DirectoryButtonList_S isOpened={isOpen}>
        {isOpen &&
          directoryLink.map((data, i) => {
            return <DirectoryButton_S key={i}>{data.title}</DirectoryButton_S>;
          })}
      </DirectoryButtonList_S>
    </div>
  );
}
function DirectoryCategory_f({ data: { title, directoryLink } }) {
  return (
    <div css="display:flex;flex-direction:column;margin-bottom:23.6px">
      <div css="margin-bottom:10px;font-size:10px;font-weight:bold">
        {title}
      </div>
      {directoryLink.map((data, i) => {
        return (
          <DirectoryButton_F key={i}>{data.title}</DirectoryButton_F>
        );
      })}
    </div>
  );
}
function AboutApple() {
  return (
    <Container>
      <div css="padding:15px 0;display:flex;border-bottom:2px solid rgb(218, 218, 223);@media (min-width:980px) {border-bottom:none;padding:10px 0;}">
        <HomeButton>
          <FontAwesomeIcon icon={faAppleWhole} />
        </HomeButton>
        <div css="margin: 0 6px;opacity:0.2;font-size:25px;user-select: none;-webkit-user-select: none;">
          &#x203A;
        </div>
        <div css="padding-top:7px "> AirPods</div>
      </div>
      <Directory_S>
        {dictionaryData.map((data, i) => (
          <DirectoryCategory_s data={data} key={i} />
        ))}
      </Directory_S>
      <Directory_F>
        <div>
          <DirectoryCategory_f data={dictionaryData[0]} />
        </div>
        <div>
          <DirectoryCategory_f data={dictionaryData[1]} />
          <DirectoryCategory_f data={dictionaryData[2]} />
        </div>
        <div>
          <DirectoryCategory_f data={dictionaryData[3]} />
        </div>
        <div>
          <DirectoryCategory_f data={dictionaryData[4]} />
          <DirectoryCategory_f data={dictionaryData[5]} />
          <DirectoryCategory_f data={dictionaryData[6]} />
        </div>
        <div>
          <DirectoryCategory_f data={dictionaryData[7]} />
          <DirectoryCategory_f data={dictionaryData[8]} />
        </div>
      </Directory_F>
      <div css="font-size:10px;color:rgb(99, 92, 83);margin:12px 0;@media (min-width:980px) {margin-top:0}">
        More ways to shop: <BlueButton> Find an Apple Store</BlueButton> or{" "}
        <BlueButton>other retailer</BlueButton> near you. Or call 800-908-988.
      </div>
    </Container>
  );
}

export default AboutApple;
