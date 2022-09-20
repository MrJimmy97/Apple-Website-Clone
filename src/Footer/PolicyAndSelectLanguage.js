import styled, { css } from "styled-components/macro";

const Container = styled.div`
  margin: 0 2%;
  width: 980px;
  display: flex;

  align-items: center;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: 10px;
  color: rgb(99, 92, 83);
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const Separator = styled.div`
  opacity: 0.2;
  user-select: none;
  -webkit-user-select: none;
`;

function PolicyAndSelectLanguage() {
  return (
    <Container>
         <div css="font-size:10px; color: rgb(99, 92, 83);margin-right:20px">
        Copyright © 2022 Apple Inc. All rights reserved.
      </div>

      
     
      <div css="display:flex">
        <Button>Privacy Policy</Button>
        <Separator>|</Separator>
        <Button>Terms of Use</Button>
        <Separator>|</Separator>
        <Button>Sales Policy</Button>
        <Separator>|</Separator>
        <Button>Legal</Button>
        <Separator>|</Separator>
        <Button>Site Map</Button>
      </div>

      <div css="display:flex;margin:6px 0 6px auto;">
        <Button>Hong Kong</Button>
        <Separator>|</Separator>
        <Button>繁體中文</Button>
      </div>
    </Container>
  );
}
export default PolicyAndSelectLanguage;
