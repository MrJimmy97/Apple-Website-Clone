import styled, { css } from "styled-components/macro";
import ArrowButton from "../ReusesableComponents/ArrowButton";
import BuyButton from "../ReusesableComponents/BuyButton";

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 230px;
  margin-bottom: 80px;
`;
const AirPodsInfo = styled.div`
  border-bottom: 1px solid rgb(212, 212, 212);
  width: 100%;
  padding-bottom: 30px;
  display: block;
`;
const AirPodsSeries = styled.div`
  padding-bottom: 8px;
  align-items: center;
  height: 35px;
`;
const ImageButton = styled.div`
  height: 235px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-bottom: 50px;
  cursor: pointer;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  align-items: center;
`;
const AirPodsSpecs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Specification = styled.div`
  height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function AirPodsCompare({
  productData: {
    specsImageScr,
    specsImageWidthAndHeight,
    specsImageAlt,
    productName,
    generation,
    price,
    specifications,
  }
}) {
  return (
    <List>
      <AirPodsInfo>
        <ImageButton>
          <img
            src={specsImageScr}
            css={specsImageWidthAndHeight}
            alt={specsImageAlt}
          />
        </ImageButton>
        <AirPodsSeries>
          <div css="font-weight: bold;font-size: 20px;">{productName}</div>
          <div css="font-size: 15px;color: grey;">{generation}</div>
        </AirPodsSeries>
        <div css="margin:15px 0">{price}</div>
        <ButtonContainer>
          <BuyButton isLargeSize={false} />
          <ArrowButton fontSize="font-size:14px;">Learn more</ArrowButton>
        </ButtonContainer>
      </AirPodsInfo>
      <AirPodsSpecs>
        {specifications.map((data) => {
          if (data.img) {
            return (
              <Specification key={data.key}>
                <div >
                  <img src={data.img} alt={data.alt} css={data.imageWidthAndHeight}/>
                </div>
                <>{data.description}</>
              </Specification>
            );
          } else if (data.time) {
            return (
              <Specification key={data.key}>
                <div css="font-weight:bold;font-size:40px">{data.time} hrs</div>
                <>{data.description}</>
              </Specification>
            );
          } else {
            return <Specification key={data.key}>&#8212;</Specification>;
          }
        })}
      </AirPodsSpecs>
    </List>
  );
}

export default AirPodsCompare;
