import styled from "styled-components";

const Title = styled.div`
  text-align: center;
  font-size: 62px;
  font-weight: bold;
  padding-top: 120px;
  padding-bottom: 40px;
`;

function MessageTitle(props) {
  return <Title>{props.children}</Title>;
}

export default MessageTitle;
