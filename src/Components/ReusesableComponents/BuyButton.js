import styled, { css } from "styled-components/macro";

const Button = styled.button`
  border: none;
  cursor: pointer;
`;

function BuyButton({ isLargeSize, isBlackTheme }) {
  let background = "";
  let size = "";

  if (isBlackTheme) {
    background = css`
      background-color: white;
      color: black;
      &:hover {
        background-color: rgb(231, 231, 231);
      }
    `;
  } else {
    background = css`
      background-color: rgb(0, 113, 227);
      color: white;
      &:hover {
        background-color: rgb(0, 119, 237);
      }
    `;
  }

  if (isLargeSize) {
    size = css`
      border-radius: 26px;
      font-size: 16px;
      padding: 12px 22px;
      @media (min-width: 1020px) {
        border-radius: 30px;
      font-size: 20px;
      padding: 12px 22px;
      }
    `;
  } else {
    size = css`
      border-radius: 20px;
      font-size: 8px;
      padding: 6px 12px;
    `;
  }

  return (
    <Button
      css={background + size}
      isLargeSize={isLargeSize}
      isBlackTheme={isBlackTheme}
    >
      Buy
    </Button>
  );
}

export default BuyButton;
