import styled, { css } from "styled-components/macro";
import { useState } from "react";
import ArrowButton from "../ReusesableComponents/ArrowButton";

const Message = styled.p`
  text-align: center;
  font-size: 6px;
  font-weight: 500;
  padding: 12px 0;
  margin: 0;
  position: relative;
  color: rgb(90, 90, 90);
  animation: top-to-bottom 2s;

  @keyframes top-to-bottom {
    0% {
      transform: translateY(-42px);
      color: white;
      background-color: rgb(8, 116, 228);
      z-index: -1;
    }
    33% {
      transform: translateY(0px);
      z-index: -1;
    }
    66% {
      color: white;
      background-color: rgb(8, 116, 228);
      z-index: 0;
    }
    100% {
      color: rgb(90, 90, 90);
      background-color: transparent;
      z-index: 0;
    }
  }
`;

function NavMessage() {
  return (
    <Message>
      Get 6 months of Apple Music free with your AirPods.*
      <ArrowButton>Learn more</ArrowButton>
    </Message>
  );
}

export default NavMessage;
