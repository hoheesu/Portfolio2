import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <FlexBox>
      <LogoBox>
        <h1>
          Front-end
          <br />
          Yoon JunSu
        </h1>
      </LogoBox>
      <Nav>
        <Ul>
          <li>
            <p>About</p>
            <p>01</p>
            <ul>
              <li>skills</li>
            </ul>
          </li>
          <li>
            <p>Portfolio</p>
            <p>02</p>
            <li>Javascript</li>
            <li>Web site</li>
            <li>React app</li>
          </li>
          <li>
            <p>Contact</p>
          </li>
        </Ul>
      </Nav>
    </FlexBox>
  );
}

const LogoBox = styled.div``;
const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
`;
const Nav = styled.nav`
  width: 60vw;
  padding: 0 20px;
`;
const FlexBox = styled.div`
  position: fixed;
  width: 100vw;
  display: flex;
  justify-content: space-between;
`;

export default Header;
