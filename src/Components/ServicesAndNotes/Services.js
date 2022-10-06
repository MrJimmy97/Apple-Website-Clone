import styled, { css } from "styled-components/macro";
import ArrowButton from "../ReusesableComponents/ArrowButton";
import servicesData from "../Data/servicesData";

const Container = styled.div`
  width: 95%;
  height: 500px;
  border-bottom: 2px solid rgb(218, 218, 223);
  padding: 70px 0;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20%;
  @media (max-width:600px) {
    gap: normal;
    height:auto;
  }
  @media (min-width: 980px) {
    width: 980px;
    gap: normal;
    justify-content: space-evenly;
    height: auto;
  }
`;

const Service = styled.div`
  &:hover {
    cursor: pointer;
  }
  &:hover span:first-child {
    text-decoration: underline;
  }
`;



function Box({ img, alt, title, content, buttonContent }) {
  return (
    <Service>
      <div css="margin-bottom:10px">
        <img src={img} alt={alt} css="width:56px;height:56px" />
        <div css="font-size:20px;font-weight:bold;margin:10px 0;white-space:nowrap;">
          {title}
        </div>
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
        {servicesData.map((data, i) => (
          <Box
            img={data.img}
            alt={data.alt}
            title={data.title}
            content={data.content}
            buttonContent={data.buttonContent}
            key={i}
          />
        ))}
      </Container>
    </div>
  );
}

export default Services;
