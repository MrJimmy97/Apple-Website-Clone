import styled, { css } from "styled-components/macro";
import GeneralButton from "../GeneralButton";

const Product = styled.div`
  width: 96%;
  height: 680px;
  margin-top: 30px;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;

  & > img {
    position: absolute;
  }
  & > div,
  h2,
  h3 {
    position: relative;
    color: ${(props) => (props.blackColorTheme ? "white" : "black")};
  }
`;
const ProductButtonBox = styled.span`
  position: absolute;
  top: 88%;
  left: calc(50%-113px);

   .whiteLearnMoreButton {
    font-size: 20px;
    color: rgb(65, 141, 217);
  }
   .blackLearnMoreButton {
    font-size: 20px;
    color: white;
  }
`;

const BuyButton = styled.button`
  background-color: ${(props) => (props.blackColorTheme ? "white" : "rgb(0,113,227)")};
  color: ${(props) => (props.blackColorTheme ? "black" : "white")};
  border-radius: 30px;
  border: none;
  font-size: 20px;
  padding: 12px 22px;
  margin-right: 20px;
  cursor: pointer;
  
  &:hover{
    background-color: ${(props) => (props.blackColorTheme ? "rgb(231,231,231)" : "rgb(0,119,237)")}
    
  }
`;
// {props.blackColorTheme ? "blackLearnMoreButton" : "whiteLearnMoreButton"}

function AirPodsIntroduction(props) {
  return (
    <Product blackColorTheme={props.blackColorTheme}>
      {props.children}
      <ProductButtonBox>
        <BuyButton blackColorTheme={props.blackColorTheme}>Buy</BuyButton>
        <GeneralButton className={props.blackColorTheme ? "blackLearnMoreButton" : "whiteLearnMoreButton"} >
          Learn more
        </GeneralButton>
      </ProductButtonBox>
    </Product>
  );
}

export default AirPodsIntroduction;
