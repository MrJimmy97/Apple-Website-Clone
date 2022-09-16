import styled from "styled-components/macro";

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
  & > img {
    margin-bottom: 4px;
  }

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
`;
function ProductBar() {
  return (
    <NavBar>
      <ProductBarButton>
        <img css="width: 35px" src="/header_NavBar/AirPods_2nd.png" alt="AirPods2nd" />
        <div>
          AirPods
          <br />
          2nd Generation
        </div>
      </ProductBarButton>
      <ProductBarButton>
        <img css="width: 32px" src="/header_NavBar/AirPods_3rd.png" alt="AirPods3nd" />
        <div>
          AirPods <br />
          3rd Generation
        </div>
      </ProductBarButton>
      <ProductBarButton>
        <img
          css="width: 40px"
          src="/header_NavBar/AirPodsPro2nd.png"
          alt="AirPodsPro2nd"
        />
        <div>
          AirPods Pro
          <br />
          2nd Generation
        </div>
      </ProductBarButton>
      <ProductBarButton>
        <img css="width: 35px" src="/header_NavBar/AirPodsMax.png" alt="AirPodsMax" />
        <div>AirPods Max</div>
      </ProductBarButton>
      <ProductBarButton>
        <img css="width: 40px" src="/header_NavBar/Compare.png" alt="Compare" />
        <div>Compare</div>
      </ProductBarButton>
      <ProductBarButton>
        <img css="width: 34px" src="/header_NavBar/AppleMusic.png" alt="AppleMusic" />
        <div>Apple Music</div>
      </ProductBarButton>
    </NavBar>
  );
}

export default ProductBar;
