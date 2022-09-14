import styled, { css } from "styled-components/macro";
import AirPodsCompare from "./AirPodsCompare";
import GeneralButton from "../GeneralButton";

const ComparesContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Compares = styled.div`
  text-align: center;
  width: 980px;
  border-bottom: 2px solid rgb(218, 218, 223);
`;
const CompareModel = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const AirPodsData = [
  {
    key: "a1",
    imageScr: "./Content_specifications/AirPods2nd_spec.png",
    imageAlt: "AirPods2nd",
    name: "AirPods",
    generation: "2nd generation",
    price: "HK$1,099",
    specifications: [
      { key: "a2", imageScr: "", imageAlt: "", description: "" },
      { key: "a3", imageScr: "", imageAlt: "", description: "" },
      { key: "a4", imageScr: "", imageAlt: "", description: "" },
      { key: "a5", imageScr: "", imageAlt: "", description: "" },
      { key: "a6", imageScr: "", imageAlt: "", description: "" },
    ],
  },
];

// &#9866

function AirPodsCompares() {
  return (
    <ComparesContainer>
      <Compares>
        <CompareModel>Testing</CompareModel>
        <GeneralButton css="font-size: 20px; padding-top: 60px; padding-bottom: 60px;">
          Compare all AirPods models
        </GeneralButton>
      </Compares>
    </ComparesContainer>
  );
}

export default AirPodsCompares;
