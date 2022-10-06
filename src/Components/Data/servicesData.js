import styled from "styled-components";

const Content = styled.div`
  width: 216px;
  font-size: 15px;
  line-height: 1.6;
  color: rgb(79, 79, 80);
`;

const servicesData = [
  {
    img: "./footer_servicesAndNotes/freeDelivery.png",
    alt: "freeDelivery",
    title: "Free Delivery",
    content: (
      <Content>
        Get free delivery direct to
        <br /> your door.
      </Content>
    ),
    buttonContent: "Learn More",
    key: "s1",
  },
  {
    img: "./footer_servicesAndNotes/AppleStore.png",
    alt: "AppleStore",
    title: "Pick up at an Apple Store",
    content: (
      <Content>
        Buy online and pick up
        <br /> available items.
      </Content>
    ),
    buttonContent: "Learn More",
    key: "s2",
  },
  {
    img: "./footer_servicesAndNotes/getHelp.png",
    alt: "getHelp",
    title: "Get Help Buying",
    content: (
      <Content>
        Have a question? Call a Specialist or chat online.
        <br /> Call 800-908-988.
      </Content>
    ),
    buttonContent: "Contact Us",
    key: "s3",
  },
  {
    img: "./footer_servicesAndNotes/makeThemYours.png",
    alt: "makeThemYours",
    title: "Make Them Yours",
    content: (
      <Content>
        Engrave your AirPods with your initials or favorite emoji — free.
        <br /> Only at Apple.
      </Content>
    ),
    buttonContent: "Learn More",
    key: "s4",
  },
];

export default servicesData