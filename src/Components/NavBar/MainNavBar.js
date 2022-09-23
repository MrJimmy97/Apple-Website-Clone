import styled, { css } from "styled-components/macro";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAppleWhole,
  faShoppingBag,
  faMagnifyingGlass,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = styled.div`
  background-color: ${(props) =>
    props.isOpened ? "black" : "rgba(0, 0, 0, 0.8)"};
  width: 100%;
  height: 48px;
  position: relative;
  z-index: 2;
  margin: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;

  @media (min-width: 1020px) {
    justify-content: center;
  }

  & > button {
    padding: 4px 4px;
    margin: 9px 18px;
    font-size: 10px;
    background-color: transparent;
    border: none;
    color: rgb(170, 170, 170);
    white-space: nowrap;
    cursor: pointer;
    :hover {
      color: rgb(211, 211, 211);
    }
  }
`;

const NavItem = styled.button`
  display: none;
  @media (min-width: 1020px) {
    display: inline;
  }
`;
const SmallNavBarItem = styled.button`
  display: inline;
  position: re;
  z-index: 2;
  @media (min-width: 1020px) {
    display: none;
  }
`;
const ClickedNavBar = styled.div`
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 100%;
  background-color: black;
  animation: ${(props) =>
    props.isOpened ? "slideIn 0.5s forwards" : "slideOut 0.5s forwards"};
  @keyframes slideIn {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0%);
    }
  }
  @keyframes slideOut {
    from {
      transform: translateY(0%);
    }
    to {
      transform: translateY(-100%);
    }
  }
`;

const Input = styled.input`
  font-family: FontAwesome;
  background-color: rgb(32, 28, 28);
  border: none;
  width: 80%;
  border-radius: 14px;
  font-size: 20px;
  padding: 10px;
  margin-bottom: 12px;
  &:focus {
    outline: none;
    color: white;
  }
`;

const ClickedNavBarButton = styled.button`
  border-bottom: 1px solid rgb(49, 49, 51);
  background: transparent;
  padding: 12px 0;
  margin: 0;
  width: 80%;
  text-align: left;
  font-size: 16px;
  color: rgb(160, 160, 160);
  cursor: pointer;
  &:last-of-type {
    border-bottom: none;
  }
  &:hover {
    color: rgb(195, 195, 195);
  }
`;

const navBarLink = [
  { title: "Store", key: "aa1" },
  { title: "Mac", key: "aa2" },
  { title: "iPad", key: "aa3" },
  { title: "iPhone", key: "aa4" },
  { title: "Watch", key: "aa5" },
  { title: "AirPods", key: "aa6" },
  { title: "TV & Home", key: "aa7" },
  { title: "Only On Apple", key: "aa8" },
  { title: "Accessories", key: "aa9" },
  { title: "Support", key: "aa10" },
];

function MainNavBar() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <NavBar isOpened={isOpened}>
        <SmallNavBarItem
          onClick={() =>
            setIsOpened((current) => {
              if (isOpened) document.body.style.overflow = "hidden";
              else document.body.style.overflow = "auto";
              return !current;
            })
          }
        >
          <FontAwesomeIcon
            css={isOpened ? "font-size: 20px" : "font-size: 15px"}
            icon={isOpened ? faXmark : faBars}
          />
        </SmallNavBarItem>
        <SmallNavBarItem>
          <FontAwesomeIcon css="font-size: 15px" icon={faAppleWhole} />
        </SmallNavBarItem>
        {!isOpened ? (
          <SmallNavBarItem>
            <FontAwesomeIcon css="font-size: 15px" icon={faShoppingBag} />
          </SmallNavBarItem>
        ) : (
          <div css="width:73px" />
        )}
        <NavItem>
          <FontAwesomeIcon css="font-size: 15px" icon={faAppleWhole} />
        </NavItem>
        {navBarLink.map((data) => (
          <NavItem key={data.key}>{data.title}</NavItem>
        ))}
        <NavItem>
          <FontAwesomeIcon css="font-size: 15px" icon={faMagnifyingGlass} />
        </NavItem>
        <NavItem>
          <FontAwesomeIcon css="font-size: 15px" icon={faShoppingBag} />
        </NavItem>
      </NavBar>
      {isOpened && (
        <ClickedNavBar isOpened={isOpened}>
          <div css="text-align:center;border-bottom:1px solid rgb(49,49,51)">
            <Input type="text" placeholder="&#xf002;   Search apple.com" />
          </div>
          <div css="display: flex;flex-direction:column;align-items: center;">
            {navBarLink.map((data) => (
              <ClickedNavBarButton key={data.key}>
                {data.title}
              </ClickedNavBarButton>
            ))}
          </div>
        </ClickedNavBar>
      )}
    </>
  );
}

export default MainNavBar;
