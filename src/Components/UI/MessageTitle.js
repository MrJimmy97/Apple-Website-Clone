import styled from "styled-components";

const Title = styled.div`
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  padding-top: 60px;
  padding-bottom: 20px;
`;

function MessageTitle(props) {
  return <Title>{props.children}</Title>;
}

export default MessageTitle;
