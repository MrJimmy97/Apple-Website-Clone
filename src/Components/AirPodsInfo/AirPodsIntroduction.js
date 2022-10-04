import styled from "styled-components/macro";
import ArrowButton from "../ReusesableComponents/ArrowButton";
import BuyButton from "../ReusesableComponents/BuyButton";

const Container = styled.div`
  width: 96%;
  height: 600px;
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
  &:nth-of-type(1) {
    height: 640px;
    @media (min-width: 980px) {
      height: 820px;
    }
  }
  &:last-of-type {
    height: 640px;
    @media (min-width: 980px) {
      height: 746px;
    }
  }
  @media (min-width: 980px) {
    height: 680px;
  }
`;
const ProductButtonBox = styled.span`
  width: 200px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 5%;
  left: calc(50%-113px);
  @media (min-width: 980px) {
    width: 230px;
  }
`;

function AirPodsIntroduction({ children, isBlackTheme }) {
  return (
    <Container>
      {children}
      <ProductButtonBox>
        <BuyButton isBlackTheme={isBlackTheme} isLargeSize={true} />
        <ArrowButton
          isBlackTheme={isBlackTheme}
          fontSize="font-size:18px; @media (min-width: 980px) {font-size:20px}"
        >
          Learn more
        </ArrowButton>
      </ProductButtonBox>
    </Container>
  );
}

export default AirPodsIntroduction;
