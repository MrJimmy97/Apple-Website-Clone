import styled, { css } from "styled-components/macro";

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
const data = [
  {
    image: "/header_NavBar/AirPods_2nd.png",
    description: "AirPods2nd",
    css: "width: 35px",
    title: (
      <div>
        AirPods
        <br />
        2nd Generation
      </div>
    ),
  },
  {
    image: "/header_NavBar/AirPods_3rd.png",
    description: "AirPods3rd",
    css: "width: 32px",
    title: (
      <div>
        AirPods <br />
        3rd Generation
      </div>
    ),
  },
  {
    image: "/header_NavBar/AirPodsPro2nd.png",
    description: "AirPodsPro2nd",
    css: "width: 40px",
    title: (
      <div>
        AirPods Pro
        <br />
        2nd Generation
      </div>
    ),
  },
  {
    image: "/header_NavBar/AirPodsMax.png",
    description: "AirPodsMax",
    css: "width: 35px",
    title: <div>AirPods Max</div>,
  },
  {
    image: "/header_NavBar/Compare.png",
    description: "Compare",
    css: "width: 40px",
    title: <div>Compare</div>,
  },
  {
    image: "/header_NavBar/AppleMusic.png",
    description: "AppleMusic",
    css: "width: 34px",
    title: <div>Apple Music</div>,
  },
];

function ProductBar() {
  return (
    <NavBar>
      {data.map(({ image, description, css, title }, i) => (
        <ProductBarButton key={i}>
          <img css={css} src={image} alt={description} />
          {title}
        </ProductBarButton>
      ))}
    </NavBar>
  );
}

export default ProductBar;
