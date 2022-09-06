import styled from "styled-components";
import GeneralButton from "../UI/GeneralButton";

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
  background-color: black;

  & > img {
    position: absolute;
  }
  & > div,
  h2,
  h3 {
    position: relative;
    color: white;
  }
`;
const ProductButtonBox = styled.span`
  position: absolute;
  top:88%;
  left: calc(50%-113px);

  .buyButton {
    background-color: white;
    color: black;
    border-radius: 30px;
    border: none;
    font-size: 20px;
    padding: 12px 22px;
    margin-right: 20px;
    cursor: pointer;
  }
  .learnMoreButton {
    font-size: 20px;
    color: white;
  }
`;

function AirPodsIntroduction(props) {
  return (
    <Product>
      {props.children}
      <ProductButtonBox>
        <button className="buyButton">Buy</button>
        <GeneralButton className="learnMoreButton">Learn more</GeneralButton>
      </ProductButtonBox>
    </Product>
  );
}

export default AirPodsIntroduction;
