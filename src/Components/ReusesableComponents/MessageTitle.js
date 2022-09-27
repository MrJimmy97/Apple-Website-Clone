import styled from "styled-components";

const Title = styled.div`
  text-align: center;
  font-size: 42px;
  font-weight: bold;
  padding-top: 120px;
  padding-bottom: 50px;
  @media (min-width: 980px) {
    font-size: 62px;
  }
`;

function MessageTitle(props) {
  return <Title>{props.children}</Title>;
}

export default MessageTitle;
