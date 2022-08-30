import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-regular-svg-icons";
import AirPodsFunctionBox from "./AirPodsFunctionbox";

const FunctionItemBar = styled.div`
  display: inline-block;
  padding-left: 30px;
`;

const ScrollButtonWrapper = styled.div`
  text-align: center;
  margin-top: 10px;
`;
const ScrollButton = styled.button`
  background: none;
  border: none;
  font-size: 30px;
  padding: 0;
  margin: 10px 10px;
  cursor: pointer;
`;

function AirPodsFunction() {
 

  return (
    <div>
      <FunctionItemBar>
        <AirPodsFunctionBox/>
      </FunctionItemBar>
      <ScrollButtonWrapper>
        <ScrollButton>
          <FontAwesomeIcon icon={faArrowAltCircleLeft} />
        </ScrollButton>
        <ScrollButton>
          <FontAwesomeIcon icon={faArrowAltCircleRight} />
        </ScrollButton>
      </ScrollButtonWrapper>
    </div>
  );
}

export default AirPodsFunction;
