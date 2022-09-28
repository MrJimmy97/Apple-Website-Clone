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
    productName: "AirPods",
    generation: "2nd generation",
    price: "HK$1,099",
    image: "./Content_specifications/AirPods2nd_spec.png",
    css: "width: 99px;height: 130px; @media (min-width:980px){width: 120px;height: 159px;}",
    imageDescription: "AirPods2nd",
    specifications: [
      { img: "", imageDescription: "", css: "", description: "" },
      { img: "", imageDescription: "", css: "", description: "" },
      { img: "", imageDescription: "", css: "", description: "" },
      {
        img: "./Content_specifications/AirPods2nd_specCharging.png",
        imageDescription: "AirPods2nd_specCharging",
        css: "width: 76px;height: 61px;",
        content: <Message>Lightning Charging Case</Message>,
      },
      {
        time: "5",
        content: (
          <Message>
            Up to 5 hours of listening
            <br /> time with a single charge<sup>6</sup>
          </Message>
        ),
      },
    ],
  },
  {
    productName: "AirPods",
    generation: "3rd generation",
    price: "From HK$1,399",
    image: "./Content_specifications/AirPods3rd_spec.png",
    css: "width: 113px;height: 130px; @media (min-width:980px){width: 149px;height: 144px;}",
    imageDescription: "AirPods3rd",
    specifications: [
      {
        img: "./Content_specifications/spatialAudio.png",
        imageDescription: "spatialAudio",
        css: "width: 40px;height: 38px;",
        content: (
          <Message>
            Personalized Spatial Audio
            <br /> with dynamic head tracking<sup>2</sup>
          </Message>
        ),
      },
      { img: "", imageDescription: "", css: "", description: "" },
      {
        img: "./Content_specifications/waterResistant.png",
        imageDescription: "waterResistant",
        css: "width: 28px;height: 41px",
        content: (
          <Message>
            Sweat and
            <br /> water resistant<sup>4</sup>
          </Message>
        ),
      },
      {
        img: "./Content_specifications/AirPods3rd_specCharging.png",
        imageDescription: "AirPods3rd_specCharing",
        css: "width: 76px;height: 61px",
        content: (
          <Message>
            Lightning Charging Case or MagSafe Charging Case<sup>5</sup>
          </Message>
        ),
      },
      {
        time: "6",
        content: (
          <Message>
            Up to 6 hours of listening
            <br /> time with a single charge<sup>6</sup>
          </Message>
        ),
      },
    ],
  },
  {
    productName: "AirPods Pro",
    generation: "2nd generation",
    price: "HK$1,849",
    image: "./Content_specifications/AirPodsPro_spec.png",
    css: "width: 111px;height: 95px; @media (min-width:980px){width: 165px;height: 140px;}",
    imageDescription: "AirPodsPro2nd",
    specifications: [
      {
        img: "./Content_specifications/spatialAudio.png",
        imageDescription: "spatialAudio",
        css: "width: 40px;height: 38px",
        content: (
          <Message>
            Personalized Spatial Audio
            <br /> with dynamic head tracking<sup>2</sup>
          </Message>
        ),
      },
      {
        img: "./Content_specifications/noiseCancellation.png",
        imageDescription: "spatialAudio",
        css: "width: 62px;height: 34px",
        content: (
          <Message>
            Active Noise
            <br /> Cancellation and
            <br /> Adaptive Transparency
          </Message>
        ),
      },
      {
        img: "./Content_specifications/waterResistant.png",
        imageDescription: "waterResistant",
        css: "width: 28px;height: 41px",
        content: (
          <Message>
            Sweat and
            <br /> water resistant<sup>4</sup>
          </Message>
        ),
      },
      {
        img: "./Content_specifications/AirPodsPro_specCharging.png",
        imageDescription: "AirPodsPro_specCharging",
        css: "width: 76px;height: 61px",
        content: (
          <Message>
            MagSafe Charging Case with speaker and lanyard loop<sup>5</sup>
          </Message>
        ),
      },
      {
        time: "6",
        content: (
          <Message>
            Up to 6 hours of listening
            <br /> time with a single charge<sup>6</sup>
          </Message>
        ),
      },
    ],
  },
  {
    productName: "AirPods Max",
    generation: "",
    price: "HK$4,599",
    image: "./Content_specifications/AirPodsMax_spec.png",
    css: "width: 119px;height: 132px; @media (min-width:980px){width: 212px;height: 235px;}",
    imageDescription: "AirPodsMax",
    specifications: [
      {
        img: "./Content_specifications/spatialAudio.png",
        imageDescription: "spatialAudio",
        css: "width: 40px;height: 38px",
        content: (
          <Message>
            Personalized Spatial Audio
            <br /> with dynamic head tracking<sup>2</sup>
          </Message>
        ),
      },
      {
        img: "./Content_specifications/noiseCancellation.png",
        imageDescription: "spatialAudio",
        css: "width: 62px;height: 34px;",
        content: (
          <Message>
            Active Noise
            <br /> Cancellation and
            <br /> Adaptive Transparency
          </Message>
        ),
      },
      {
        img: "./Content_specifications/waterResistant.png",
        imageDescription: "waterResistant",
        css: "width: 28px;height: 41px",
        content: (
          <Message>
            Sweat and
            <br /> water resistant<sup>4</sup>
          </Message>
        ),
      },
      {
        img: "./Content_specifications/AirPodsMax_specCharging.png",
        imageDescription: "AirPodsMax_specCharging",
        css: "width: 76px;height: 61px;object-fit: scale-down",
        content: <Message>Smart Case</Message>,
      },
      {
        time: "6",
        content: (
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
