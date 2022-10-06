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
const NavBarItemFull = styled.button`
  display: none;

  @media (min-width: 1020px) {
    display: inline;
  }
`;
const NavBarItemSmall = styled.button`
  display: inline;
  position: relative;
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
  transform: translateY(-100%) scaleY(0);
  ${({ navAnimation }) => navAnimation}

  @keyframes slideIn {
    from {
      transform: translateY(-100%) scaleY(0);
    }
    to {
      transform: translateY(0%) scaleY(1);
    }
  }
  @keyframes slideOut {
    from {
      transform: translateY(0%) scaleY(1);
    }
    to {
      transform: translateY(-100%) scaleY(0);
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
  "Store",
  "Mac",
  "iPad",
  "iPhone",
  "Watch",
  "AirPods",
  "TV & Home",
  "Only On Apple",
  "Accessories",
  "Support",
];

function MainNavBar() {
  const [isOpened, setIsOpened] = useState(false);
  const [navAnimation, setNavAnimation] = useState("");

  return (
    <>
      <NavBar isOpened={isOpened}>
        <NavBarItemSmall
          onClick={() =>
            setIsOpened((current) => {
              if (current) {
                document.body.style.overflow = "auto";
                setNavAnimation("animation: slideOut 0.5s forwards;");
              } else {
                document.body.style.overflow = "hidden";
                setNavAnimation("animation: slideIn 0.5s forwards;");
              }
              return !current;
            })
          }
        >
          <FontAwesomeIcon
            css={isOpened ? "font-size: 20px" : "font-size: 15px"}
            icon={isOpened ? faXmark : faBars}
          />
        </NavBarItemSmall>
        <NavBarItemSmall>
          <FontAwesomeIcon css="font-size: 15px" icon={faAppleWhole} />
        </NavBarItemSmall>
        {!isOpened ? (
          <NavBarItemSmall>
            <FontAwesomeIcon css="font-size: 15px" icon={faShoppingBag} />
          </NavBarItemSmall>
        ) : (
          <div css="width:73px" />
        )}
        <NavBarItemFull>
          <FontAwesomeIcon css="font-size: 15px" icon={faAppleWhole} />
        </NavBarItemFull>
        {navBarLink.map((data, i) => (
          <NavBarItemFull key={i}>{data}</NavBarItemFull>
        ))}
        <NavBarItemFull>
          <FontAwesomeIcon css="font-size: 15px" icon={faMagnifyingGlass} />
        </NavBarItemFull>
        <NavBarItemFull>
          <FontAwesomeIcon css="font-size: 15px" icon={faShoppingBag} />
        </NavBarItemFull>
      </NavBar>
      <ClickedNavBar navAnimation={navAnimation}>
        <div css="text-align:center;border-bottom:1px solid rgb(49,49,51)">
          <Input type="text" placeholder="&#xf002;   Search apple.com" />
        </div>
        <div css="display: flex;flex-direction:column;align-items: center;">
          {navBarLink.map((data, i) => (
            <ClickedNavBarButton key={i}>{data}</ClickedNavBarButton>
          ))}
        </div>
      </ClickedNavBar>
    </>
  );
}

export default MainNavBar;
