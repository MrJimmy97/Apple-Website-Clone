import styled, { css } from "styled-components/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleWhole } from "@fortawesome/free-solid-svg-icons";

const Section = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 14px;
`;
const HomeButton = styled.button`
  background: transparent;
  border: none;
  opacity: 0.6;
  font-size: 16px;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;
const Container = styled.div`
  width: 980px;
  border-bottom: 2px solid rgb(218, 218, 223);
`;
const Directory = styled.div`
  display: flex;
  justify-content: space-between;
`;



function AboutApple() {
  return (
    <Section>
      <Container>
        <div css="margin: 15px 0;display:flex;">
          <HomeButton>
            <FontAwesomeIcon icon={faAppleWhole} />
          </HomeButton>
          <div css="margin: 0 6px;opacity:0.2;font-size:25px;user-select: none;-webkit-user-select: none;">
            &#x203A;
          </div>
          <div css="padding-top:7px "> AirPods</div>
        </div>
        <Directory>
        
        </Directory>
      </Container>
    </Section>
  );
}

export default AboutApple;
