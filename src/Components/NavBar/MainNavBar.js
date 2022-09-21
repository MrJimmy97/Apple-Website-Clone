import styled, { css } from "styled-components/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAppleWhole,
  faShoppingBag,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = styled.div`
  background-color: rgb(56, 52, 52);
  width: 100%;
  margin: 0;
  text-align: center;
  white-space: nowrap;
`;

const NavItem = styled.button`
  display: none;
  @media (min-width: 1020px) {
    display: inline;
    padding: 4px 4px;
    margin: 9px 18px;
    font-size: 10px;
    background-color: transparent;
    border: none;
    color: rgb(170, 170, 170);
    white-space: nowrap;
    cursor: pointer;
    &:hover,
    &:active {
      color: rgb(211, 211, 211);
    }
  }
`;


function MainNavBar() {
  return (
    <NavBar>
      <NavItem>
        <FontAwesomeIcon css="font-size: 15px" icon={faAppleWhole} />
      </NavItem>
      <NavItem>Store</NavItem>
      <NavItem>Mac</NavItem>
      <NavItem>iPad</NavItem>
      <NavItem>iPhone</NavItem>
      <NavItem>Watch</NavItem>
      <NavItem>AirPods</NavItem>
      <NavItem>TV & Home</NavItem>
      <NavItem>Only On Apple</NavItem>
      <NavItem>Accessories</NavItem>
      <NavItem>Support</NavItem>
      <NavItem>
        <FontAwesomeIcon css="font-size: 15px" icon={faMagnifyingGlass} />
      </NavItem>
      <NavItem>
        <FontAwesomeIcon css="font-size: 15px" icon={faShoppingBag} />
      </NavItem>
      
    </NavBar>
  );
}

export default MainNavBar;
