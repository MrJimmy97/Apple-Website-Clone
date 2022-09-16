import styled, { css } from "styled-components/macro";

const Container = styled.button`
  border: none;
  background-color: transparent;
  color:  ${(props) => (props.isBlackTheme ? "white" : "rgb(65, 141, 217)")};
  padding-left: 2px;
  cursor: pointer;
`;
const Label = styled.span`
  &:hover,
  &:active {
    text-decoration: underline;
  }
`;
const NoSelected = styled.span`
  user-select: none; /* Chrome */
  -webkit-user-select: none;/* Safari */
`;

function ArrowButton(props) {
  return (
    <Container css={props.fontSize} isBlackTheme={props.isBlackTheme}>
      <Label>{props.children}</Label>
      <NoSelected>{" >"}</NoSelected>
    </Container>
  );
}

export default ArrowButton;
