import styled from "styled-components/macro";
import ArrowButton from "../ReusesableComponents/ArrowButton";
import BuyButton from "../ReusesableComponents/BuyButton";

const Container = styled.div`
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
`;

const ProductButtonBox = styled.span`
  width: 230px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 88%;
  left: calc(50%-113px);
`;


function AirPodsIntroduction({children, isBlackTheme}) {
  return (
    <Container>
      {children}
      <ProductButtonBox>
        <BuyButton isBlackTheme={isBlackTheme} isLargeSize={true} />
        <ArrowButton
          isBlackTheme={isBlackTheme}
          fontSize="font-size:20px"
        >
          Learn more
        </ArrowButton>
      </ProductButtonBox>
    </Container>
  );
}

export default AirPodsIntroduction;
