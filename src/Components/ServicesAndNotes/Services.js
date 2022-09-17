import styled, { css } from "styled-components/macro";
import ArrowButton from "../ReusesableComponents/ArrowButton";

const Container = styled.div`
  width: 980px;
  border-bottom: 2px solid rgb(218, 218, 223);
  padding: 70px 0;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: nowrap;
`;

const Service = styled.div`
  &:hover  {
    cursor: pointer;
  }
  &:hover span{
    text-decoration:underline;
  }
`;

const Content = styled.div`
  width: 216px;
  font-size: 15px;
  line-height: 1.6;
  color: rgb(79, 79, 80);
`;

const data = [
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

function Box({ img, alt, title, content, buttonContent }) {
  return (
    <Service>
      <div css="margin-bottom:10px">
        <img src={img} alt={alt} css="width:56px;height:56px" />
        <div css="font-size:20px;font-weight:bold;margin:10px 0;">{title}</div>
        {content}
      </div>
      <ArrowButton fontSize="font-size: 15px">{buttonContent}</ArrowButton>
    </Service>
  );
}

function Services() {
  return (
    <div css=" width: 100%;display: flex;justify-content: center;">
      <Container>
        {data.map((data) => (
          <Box
            img={data.img}
            alt={data.alt}
            title={data.title}
            content={data.content}
            buttonContent={data.buttonContent}
            key={data.key}
          />
        ))}
      </Container>
    </div>
  );
}

export default Services;
