import styled, { css } from "styled-components/macro";
import airPodsData from "../airPodsData";
import ArrowButton from "../ReusesableComponents/ArrowButton";
import AirPodsCompare from "./AirPodsCompare";

const Container = styled.div`
  width: 980px;
  border-bottom: 2px solid rgb(218, 218, 223);
  padding-bottom: 60px;
  text-align: center;
`;
const AirPodsList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
`;

function AirPodsCompares() {
  return (
    <div>
      <Container>
        <AirPodsList>
          {airPodsData.map((data) => (
            <AirPodsCompare productData={data} key={data.key} />
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
