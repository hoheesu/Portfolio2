import React, { useEffect } from "react";
import styled from "styled-components";

function Header() {
  useEffect(() => {}, []);
  return (
    <FlexBox>
      <LogoBox>
        <Logo>
          Front-End
          <br />
          Yoon JunSu
        </Logo>
      </LogoBox>
      <nav>
        <Ul>
          <Depth1li>
            <TitleNumber>01</TitleNumber>
            <HeaderTitle>About</HeaderTitle>
            <Depth2ul>
              <Depth2li>skills</Depth2li>
            </Depth2ul>
          </Depth1li>
          <Depth1li>
            <TitleNumber>02</TitleNumber>
            <HeaderTitle>Portfolio</HeaderTitle>
            <Depth2ul>
              <Depth2li>Javascript</Depth2li>
              <Depth2li>Web site</Depth2li>
              <Depth2li>React app</Depth2li>
            </Depth2ul>
          </Depth1li>
          <Depth1li>
            <TitleNumber>03</TitleNumber>
            <HeaderTitle>Contact</HeaderTitle>
          </Depth1li>
        </Ul>
      </nav>
    </FlexBox>
  );
}

const FlexBox = styled.header`
  position: sticky;
  top: 0;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  cursor: url("/images/mouse-dark.svg"), auto;
  padding: 1rem;
  backdrop-filter: blur(2px);
  transition: all 0.5s ease-in;
  &:hover {
    background-color: var(--color-black);
    color: var(--color-white);
    backdrop-filter: blur(2px);
  }
`;
const Logo = styled.h1`
  font-family: "Anton", sans-serif;
  font-size: 1.5rem;
`;
const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
`;
const Depth1li = styled.li`
  width: 15rem;
  margin-left: 5rem;
  &:hover {
    & > ul {
      transform: scaleY(1);
    }
  }
`;
const TitleNumber = styled.p``;
const HeaderTitle = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
`;
const Depth2ul = styled.ul`
  transform: scaleY(0);
  transform-origin: 0px 0px;
  transition: all 0.5s;
`;
const Depth2li = styled.li`
  font-weight: 300;
  font-size: 1.2rem;
`;
const LogoBox = styled.div``;
export default Header;
