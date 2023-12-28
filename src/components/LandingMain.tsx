import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const LandingMain: React.FC = () => {
  const [isTitleHover, setIsTitleHover] = useState<boolean>(false);

  return (
    <LandingBox className="container">
      <Wrap>
        <Title
          onMouseEnter={() => setIsTitleHover(true)}
          onMouseLeave={() => setIsTitleHover(false)}
        >
          YOON JUN SU
          <br />
          PORTFOLIO
        </Title>
        <WaveWrap className={isTitleHover ? "active" : "none"}>
          <BackCircle className="bc bc1"></BackCircle>
          <BackCircle className="bc bc2"></BackCircle>
        </WaveWrap>
      </Wrap>
    </LandingBox>
  );
};

const LandingBox = styled.div``;

const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const move = keyframes`
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const WaveWrap = styled.div`
  transition: all 0.5s ease-in-out;
  &.none {
    .bc {
      opacity: 100%;
    }
  }
  &.active {
    opacity: 50%;
  }
`;
const BackCircle = styled.div`
  position: absolute;
  width: 700px;
  height: 400px;
  border-radius: 100%;
  top: 50vh;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0deg);
  &.bc1 {
    background: #f3ffb6d2;
    animation: ${move} 6s infinite linear;
  }

  &.bc2 {
    background: #b9b6ffd3;
    animation: ${move} 4s infinite linear;
  }
`;

const Title = styled.h1`
  position: absolute;
  z-index: 1;
  top: 50vh;
  left: 50%;
  transform: translate(-50%, -50%);
  width: max-content;
  text-align: center;
  font-size: 5rem;
  line-height: 8rem;
  font-weight: 800;
  color: #ffffffa3;
  -webkit-text-stroke: 3px var(--color-black);
  &:hover {
    cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='40'><rect rx='20' width='100%' height='100%' fill='black' opacity='90%' /><text x='50%' y='50%' font-family='sans-serif' font-weight='bold' font-size='14' dominant-baseline='middle' text-anchor='middle' fill='white'>Hello</text></svg>")
        16 0,
      auto;
  }
`;

export default LandingMain;
