import styled, { css } from "styled-components/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleWhole } from "@fortawesome/free-solid-svg-icons";
import dictionaryData from "../Components/dictionaryData";


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
  font-size: 14px;
`;
const Directory = styled.div`
  display: flex;
  justify-content: space-between; ;
`;

const DirectoryButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0 ;
  font-size: 10px;
  margin-bottom: 10px;
  text-align: left;
  color: rgb(99, 92, 83);
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
const BlueButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  font-size: 10px;
  color: rgb(48,128,211);
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

function DirectoryCategory({ data: { title, directoryLink } }) {
  return (
    <div css="display:flex;flex-direction:column;margin-bottom:23.6px">
      <div css="margin-bottom:10px;font-size:10px;font-weight:bold">
        {title}
      </div>
      {directoryLink.map((data) => {
        return <DirectoryButton key={data.key}>{data.title}</DirectoryButton>;
      })}
    </div>
  );
}

function AboutApple() {
  return (
    
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
          <div>
            <DirectoryCategory data={dictionaryData[0]} />
          </div>
          <div>
            <DirectoryCategory data={dictionaryData[1]} />
            <DirectoryCategory data={dictionaryData[2]} />
          </div>
          <div>
            <DirectoryCategory data={dictionaryData[3]} />
          </div>
          <div>
            <DirectoryCategory data={dictionaryData[4]} />
            <DirectoryCategory data={dictionaryData[5]} />
            <DirectoryCategory data={dictionaryData[6]} />
          </div>
          <div>
            <DirectoryCategory data={dictionaryData[7]} />
            <DirectoryCategory data={dictionaryData[8]} />
          </div>
        </Directory>
        <div css="font-size:10px;color:rgb(99, 92, 83);margin-bottom:6px">
          More ways to shop: <BlueButton> Find an Apple Store</BlueButton> or{" "}
          <BlueButton>other retailer</BlueButton> near you. Or call 800-908-988.
        </div>
      </Container>
   
  );
}

export default AboutApple;
