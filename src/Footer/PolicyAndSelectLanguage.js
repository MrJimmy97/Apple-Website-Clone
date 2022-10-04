import styled, { css } from "styled-components/macro";

const Container = styled.div`
  margin-bottom: 20px;
  font-size: 10px;
  width: 95%;
  display: flex;
  flex-direction: column;
  
  @media (min-width: 980px) {
    width: 980px;
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
  }
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
      <div css="display:flex;margin:6px 0 12px 0;  @media (min-width: 980px) {margin:6px 0 6px auto;order: 3}">
        <Button css="padding-left:0; @media (min-width: 980px) {padding-left:6px;}">
          Hong Kong
        </Button>
        <Separator>|</Separator>
        <Button>繁體中文</Button>
      </div>
      <div css="margin-bottom:6px;color:rgb(119,122,153);@media (min-width: 980px) {margin:0 15px 0 0;order: 1}">
        Copyright © 2022 Apple Inc. All rights reserved.
      </div>
      <div css="display:flex; margin-bottom:10px;@media (min-width: 980px) {order: 2;margin-bottom:0}">
        <Button css="padding-left:0;@media (min-width: 980px) {padding-left:6px}">
          Privacy Policy
        </Button>
        <Separator>|</Separator>
        <Button>Terms of Use</Button>
        <Separator>|</Separator>
        <Button>Sales Policy</Button>
        <Separator>|</Separator>
        <Button>Legal</Button>
        <Separator>|</Separator>
        <Button>Site Map</Button>
      </div>
    </Container>
  );
}
export default PolicyAndSelectLanguage;
