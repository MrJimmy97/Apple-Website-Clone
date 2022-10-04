import styled, { css } from "styled-components/macro";
import airPodsData from "../airPodsData";
import ArrowButton from "../ReusesableComponents/ArrowButton";
import AirPodsCompare from "./AirPodsCompare";

const Container = styled.div`
  width: 95%;
  margin: auto;
  padding-bottom: 60px;
  text-align: center;

  @media (min-width: 980px) {
    width: 980px;
    border-bottom: 2px solid rgb(218, 218, 223);
  }
`;
const AirPodsList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 15%;
  
  @media (min-width: 980px) {
    column-gap: normal;
    flex-wrap: nowrap;
    justify-content: space-between;
  }
`;

function AirPodsCompares() {
  return (
    <div>
      <Container>
        <AirPodsList>
          {airPodsData.map((data, i) => (
            <AirPodsCompare productData={data} key={i} />
          ))}
        </AirPodsList>
        <ArrowButton fontSize="font-size: 20px">
          Compare all AirPods models
        </ArrowButton>
      </Container>
    </div>
  );
}

export default AirPodsCompares;
