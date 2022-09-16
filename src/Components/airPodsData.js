import styled from "styled-components";

const Message = styled.div`
  height: 39px;
  font-size: 15px;
  margin-top: 10px;
  color: rgb(79, 79, 80);
  & > sup:hover {
    color: rgb(65, 141, 217);
    cursor: pointer;
  }
`;

const airPodsData = [
  {
    key: "a1",
    productName: "AirPods",
    generation: "2nd generation",
    price: "HK$1,099",
    specsImageScr: "./Content_specifications/AirPods2nd_spec.png",
    specsImageWidthAndHeight: "width: 120px;height: 159px",
    specsImageAlt: "AirPods2nd",
    specifications: [
      { key: "a2", img: "", alt: "", imageWidthAndHeight: "", description: "" },
      { key: "a3", img: "", alt: "", imageWidthAndHeight: "", description: "" },
      { key: "a4", img: "", alt: "", imageWidthAndHeight: "", description: "" },
      {
        key: "a5",
        img: "./Content_specifications/AirPods2nd_specCharging.png",
        alt: "AirPods2nd_specCharging",
        imageWidthAndHeight: "width: 76px;height: 61px;object-fit: contain",
        description: <Message>Lightning Charging Case</Message>,
      },
      {
        key: "a6",
        time: "5",
        description: (
          <Message>
            Up to 5 hours of listening
            <br /> time with a single charge<sup>6</sup>
          </Message>
        ),
      },
    ],
  },
  {
    key: "b1",
    productName: "AirPods",
    generation: "3rd generation",
    price: "From HK$1,399",
    specsImageScr: "./Content_specifications/AirPods3rd_spec.png",
    specsImageWidthAndHeight: "width: 149px;height: 144px",
    specsImageAlt: "AirPods3rd",
    specifications: [
      {
        key: "b2",
        img: "./Content_specifications/spatialAudio.png",
        alt: "spatialAudio",
        imageWidthAndHeight: "width: 40px;height: 38px;",
        description: (
          <Message>
            Personalized Spatial Audio
            <br /> with dynamic head tracking<sup>2</sup>
          </Message>
        ),
      },
      { key: "b3", img: "", alt: "", imageWidthAndHeight: "", description: "" },
      {
        key: "b4",
        img: "./Content_specifications/waterResistant.png",
        alt: "waterResistant",
        imageWidthAndHeight: "width: 28px;height: 41px",
        description: (
          <Message>
            Sweat and
            <br /> water resistant<sup>4</sup>
          </Message>
        ),
      },
      {
        key: "b5",
        img: "./Content_specifications/AirPods3rd_specCharging.png",
        alt: "AirPods3rd_specCharing",
        imageWidthAndHeight: "width: 76px;height: 61px",
        description: (
          <Message>
            Lightning Charging Case or MagSafe Charging Case<sup>5</sup>
          </Message>
        ),
      },
      {
        key: "b6",
        time: "6",
        description: (
          <Message>
            Up to 6 hours of listening
            <br /> time with a single charge<sup>6</sup>
          </Message>
        ),
      },
    ],
  },
  {
    key: "c1",
    productName: "AirPods Pro",
    generation: "2nd generation",
    price: "HK$1,849",
    specsImageScr: "./Content_specifications/AirPodsPro_spec.png",
    specsImageWidthAndHeight: "width: 165px;height: 140px",
    specsImageAlt: "AirPodsPro2nd",
    specifications: [
      {
        key: "c2",
        img: "./Content_specifications/spatialAudio.png",
        alt: "spatialAudio",
        imageWidthAndHeight: "width: 40px;height: 38px",
        description: (
          <Message>
            Personalized Spatial Audio
            <br /> with dynamic head tracking<sup>2</sup>
          </Message>
        ),
      },
      {
        key: "c3",
        img: "./Content_specifications/noiseCancellation.png",
        alt: "spatialAudio",
        imageWidthAndHeight: "width: 62px;height: 34px",
        description: (
          <Message>
            Active Noise
            <br /> Cancellation and
            <br /> Adaptive Transparency
          </Message>
        ),
      },
      {
        key: "c4",
        img: "./Content_specifications/waterResistant.png",
        alt: "waterResistant",
        imageWidthAndHeight: "width: 28px;height: 41px",
        description: (
          <Message>
            Sweat and
            <br /> water resistant<sup>4</sup>
          </Message>
        ),
      },
      {
        key: "c5",
        img: "./Content_specifications/AirPodsPro_specCharging.png",
        alt: "AirPodsPro_specCharging",
        imageWidthAndHeight: "width: 76px;height: 61px",
        description: (
          <Message>
            MagSafe Charging Case with speaker and lanyard loop<sup>5</sup>
          </Message>
        ),
      },
      {
        key: "c6",
        time: "6",
        description: (
          <Message>
            Up to 6 hours of listening
            <br /> time with a single charge<sup>6</sup>
          </Message>
        ),
      },
    ],
  },
  {
    key: "d1",
    productName: "AirPods Max",
    generation: "",
    price: "HK$4,599",
    specsImageScr: "./Content_specifications/AirPodsMax_spec.png",
    specsImageWidthAndHeight: "width: 212px;height: 235px",
    specsImageAlt: "AirPodsMax",
    specifications: [
      {
        key: "d2",
        img: "./Content_specifications/spatialAudio.png",
        alt: "spatialAudio",
        imageWidthAndHeight: "width: 40px;height: 38px",
        description: (
          <Message>
            Personalized Spatial Audio
            <br /> with dynamic head tracking<sup>2</sup>
          </Message>
        ),
      },
      {
        key: "d3",
        img: "./Content_specifications/noiseCancellation.png",
        alt: "spatialAudio",
        imageWidthAndHeight: "width: 62px;height: 34px;",
        description: (
          <Message>
            Active Noise
            <br /> Cancellation and
            <br /> Adaptive Transparency
          </Message>
        ),
      },
      {
        key: "d4",
        img: "./Content_specifications/waterResistant.png",
        alt: "waterResistant",
        imageWidthAndHeight: "width: 28px;height: 41px",
        description: (
          <Message>
            Sweat and
            <br /> water resistant<sup>4</sup>
          </Message>
        ),
      },
      {
        key: "d5",
        img: "./Content_specifications/AirPodsMax_specCharging.png",
        alt: "AirPodsMax_specCharging",
        imageWidthAndHeight: "width: 76px;height: 61px;object-fit: scale-down",
        description: <Message>Smart Case</Message>,
      },
      {
        key: "d6",
        time: "6",
        description: (
          <Message>
            Up to 6 hours of listening
            <br /> time with a single charge<sup>6</sup>
          </Message>
        ),
      },
    ],
  },
];

export default airPodsData;
