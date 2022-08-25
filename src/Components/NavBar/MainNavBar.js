import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleWhole } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const NavBar = styled.div`
  background-color: rgb(56, 52, 52);
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const NavBarbutton = styled.button`
  padding: 4px 4px;
  margin: 9px 18px;
  font-size: x-small;
  background-color: transparent;
  border: none;
  color: rgb(170, 170, 170);
  white-space: nowrap;
  cursor: pointer;
  &:hover,
  &:active {
    color: rgb(211, 211, 211);
  }
`;

function MainNavBar(){
  return (
    <NavBar>
      <NavBarbutton>
        <FontAwesomeIcon style={{fontSize:'15px'}} icon={faAppleWhole} />
      </NavBarbutton>
      <NavBarbutton>Store</NavBarbutton>
      <NavBarbutton>Mac</NavBarbutton>
      <NavBarbutton>iPad</NavBarbutton>
      <NavBarbutton>iPhone</NavBarbutton>
      <NavBarbutton>Watch</NavBarbutton>
      <NavBarbutton>AirPods</NavBarbutton>
      <NavBarbutton>TV & Home</NavBarbutton>
      <NavBarbutton>Only On Apple</NavBarbutton>
      <NavBarbutton>Accessories</NavBarbutton>
      <NavBarbutton>Support</NavBarbutton>
      <NavBarbutton>
        <FontAwesomeIcon style={{fontSize:'15px'}} icon={faMagnifyingGlass} />
      </NavBarbutton>
      <NavBarbutton>
        <FontAwesomeIcon style={{fontSize:'15px'}} icon={faShoppingBag} />
      </NavBarbutton>
    </NavBar>
  );
};

export default MainNavBar;
