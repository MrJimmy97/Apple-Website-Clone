import styled from "styled-components";
import GeneralButton from "./GeneralButton";

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
  justify-content: flex-end;
  background-color: black;

  & > video {
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
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
  position: relative;
  padding-bottom: 40px;

  .buyButton {
    background-color: white;
    color: black;
    border-radius: 30px;
    border: none;
    font-size: 20px;
    padding: 12px 22px;
    margin-right: 20px;
  }
  .buyButton:hover {
    cursor: pointer;
  }
  .learnMoreButton {
    font-size: 20px;
    color: white;
  }
`;

function ProductBox(props) {
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

export default ProductBox;
