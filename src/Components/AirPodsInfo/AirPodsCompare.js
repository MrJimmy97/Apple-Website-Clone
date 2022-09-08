import styled from "styled-components";


const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
`;
const AirPodsInfo = styled.div`
  border-bottom: 2px solid grey;
  padding:0 16px 10px;

`;
const ImageButton = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 16px;
  /* width:; */
  cursor: pointer;
`;
const AirPodsName = styled.div`
  padding-bottom: 8px;
  align-items: center;
`;
const AirPodsSeries = styled.div`
  font-weight: bold;
  font-size: 8px;
`;
const Generation = styled.div`
  font-size: 6px;
  color: grey;
`;
const Price = styled.div`
font-size:8px;
`



function AirPodsCompare(props) {
  return (
    <List>
      {/* <AirPodsInfo>
        <ImageButton>
          <img src={compare.imgScr} alt={compare.imgAlt} />
        </ImageButton>
        <AirPodsName>
          <AirPodsSeries>{compare.series}</AirPodsSeries>
            <Generation>{compare.generation}</Generation>
        </AirPodsName>
        <Price></Price>
        <BuyButton></BuyButton>
        <LearnMoreButton></LearnMoreButton>
      </AirPodsInfo>
      <CompareFeatures>
        <SpatialAudio></SpatialAudio>
        <NoiseCancellation></NoiseCancellation>
        <WaterResistant></WaterResistant>
        <Charging></Charging>
        <Duaration></Duaration>
      </CompareFeatures> */}
    </List>
  );
}

export default AirPodsCompare;
