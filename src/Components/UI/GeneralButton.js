import styled from "styled-components";

const LearnMoreButton = styled.button`
  border: none;
  background-color: transparent;
  color: rgb(65, 141, 217);
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
  user-select: none;
  -webkit-user-select: none;
`;

function GeneralButton(props) {
  return (
    <LearnMoreButton className={props.className}>
      <Label>{props.children}</Label>
      <NoSelected>{" >"}</NoSelected>
    </LearnMoreButton>
  );
}

export default GeneralButton;
