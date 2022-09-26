import styled, { css } from "styled-components/macro";
import ArrowButton from "../ReusesableComponents/ArrowButton";
import BuyButton from "../ReusesableComponents/BuyButton";

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 230px;
  margin: 40px 0 80px 0;
`;
const AirPodsInfo = styled.div`
  border-bottom: 1px solid rgb(212, 212, 212);
  width: 100%;
  padding-bottom: 30px;
  display: block;
`;
const ImageButton = styled.div`
  height: 132px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-bottom: 30px;
  cursor: pointer;
  @media (min-width: 980px) {
    height: 235px;
    margin-bottom: 50px;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  align-items: center;
`;
const Specification = styled.div`
  height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:last-of-type{
    border-bottom: 1px solid rgb(212, 212, 212);
  }
  @media (min-width: 980px) {
    &:last-of-type{
    border-bottom: none;
  }
  }
`;

function AirPodsCompare({
  productData: {
    image,
    css,
    imageDescription,
    productName,
    generation,
    price,
    specifications,
  },
}) {
  return (
    <List>
      <AirPodsInfo>
        <ImageButton>
          <img src={image} css={css} alt={imageDescription} />
        </ImageButton>
        <div css=" padding-bottom: 8px;align-items: center;height: 35px;">
          <div css="font-weight: bold;font-size: 20px;">{productName}</div>
          <div css="font-size: 15px;color: grey;">{generation}</div>
        </div>
        <div css="margin:15px 0">{price}</div>
        <ButtonContainer>
          <BuyButton isLargeSize={false} />
          <ArrowButton fontSize="font-size:14px;">Learn more</ArrowButton>
        </ButtonContainer>
      </AirPodsInfo>
      <div css="display: flex;flex-direction: column;justify-content: space-evenly;">
        {specifications.map((data) => {
          if (data.img) {
            return (
              <Specification key={data.key}>
                <div>
                  <img src={data.img} alt={data.image} css={data.css} />
                </div>
                <>{data.content}</>
              </Specification>
            );
          } else if (data.time) {
            return (
              <Specification key={data.key}>
                <div css="font-weight:bold;font-size:40px">{data.time} hrs</div>
                <>{data.content}</>
              </Specification>
            );
          } else {
            return <Specification key={data.key}>&#8212;</Specification>;
          }
        })}
      </div>
    </List>
  );
}

export default AirPodsCompare;
