import styled from "styled-components";

const NavBar = styled.div`
  background-color: white;
  width: 100%;
  margin: 0;
  text-align: center;
  white-space: nowrap;
`;
const ProductBarButton = styled.button`
  border: none;
  background-color: transparent;
  width: 95px;
  height: 95px;
  margin: 2px 8px;
  font-size: 8px;
  white-space: nowrap;
  cursor: pointer;
  animation: left-to-center 1s;

  &:hover,
  &:active {
    color: rgb(65, 141, 217);
  }
  & img {
    margin-bottom: 4px;
  }
  & .AirPods2nd {
    width: 35px;
    padding-bottom: 4px;
  }
  & .AirPods3rd {
    width: 32px;
    padding-bottom: 4px;
  }
  & .AirPodsPro {
    width: 40px;
    padding-bottom: 4px;
  }
  & .AirPodsMax {
    width: 35px;
    padding-bottom: 4px;
  }
  & .AppleMusic {
    width: 34px;
    padding-bottom: 4px;
  }
  & .Compare {
    width: 44px;
    padding-bottom: 4px;

    @keyframes left-to-center {
      from {
        transform: translateX(200px);
        opacity: 0;
      }
      to {
        transform: translateX(0px);
        opacity: 1;
      }
    }
  }
`;
function ProductBar() {
  return (
    <NavBar>
      <ProductBarButton>
        <img className="AirPods2nd" src="/NavBar/AirPods_2nd.png" alt="AirPods2nd" />
        <div>
          AirPods
          <br />
          2nd Generation
        </div>
      </ProductBarButton>
      <ProductBarButton>
        <img className="AirPods3rd" src="/NavBar/AirPods_3rd.png" alt="AirPods3nd" />
        <div>
          AirPods <br />
          3rd Generation
        </div>
      </ProductBarButton>
      <ProductBarButton>
        <img className="AirPodsPro" src="/NavBar/AirPodsPro.png" alt="AirPodsPro" />
        <div>AirPods Pro</div>
      </ProductBarButton>
      <ProductBarButton>
        <img className="AirPodsMax" src="/NavBar/AirPodsMax.png" alt="AirPodsMax" />
        <div>AirPods Max</div>
      </ProductBarButton>
      <ProductBarButton>
        <img className="Compare" src="/NavBar/Compare.png" alt="Compare" />
        <div>Compare</div>
      </ProductBarButton>
      <ProductBarButton>
        <img className="AppleMusic" src="/NavBar/AppleMusic.png" alt="AppleMusic" />
        <div>Apple Music</div>
      </ProductBarButton>
    </NavBar>
  );
};

export default ProductBar;
