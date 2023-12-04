import React from "react";
import styled from "styled-components";
import PortfolioNormalImg from "../../public/images/portfolio-normal.png";

function LandingMain() {
  return (
    <LandingBox className="container">
      <LeftBox className="left-box">
        <Img src={PortfolioNormalImg} alt="Portfolio Icon" />
      </LeftBox>
      <RightBox className="right-box">
        <H1>
          YOON JUN SU
          <br />
          PORTFOLIO
        </H1>
      </RightBox>
    </LandingBox>
  );
}

const LandingBox = styled.div`
  cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='40'><rect rx='20' width='100%' height='100%' fill='black' opacity='70%' /><text x='50%' y='50%' font-family='sans-serif' font-weight='bold' font-size='14' dominant-baseline='middle' text-anchor='middle' fill='white'>Hello</text></svg>")
      16 0,
    auto;
`;
const LeftBox = styled.div``;
const RightBox = styled.div``;

const Img = styled.img`
  width: 14rem;
`;
const H1 = styled.h1`
  font-size: 5rem;
  font-weight: 700;
`;
export default LandingMain;
