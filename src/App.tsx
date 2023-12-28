import { useEffect, useState } from "react";
import styled from "styled-components";
import GlobalStyles from "./styles/globalStyles.ts";
import LandingMain from "./components/LandingMain";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects.tsx";

function App() {
  return (
    <>
      <BackGround className="bgc"></BackGround>
      <GlobalStyles />
      <Container>
        <LandingMain />
      </Container>
      <Header />
      <Container>
        <AboutMe />
        <Skills />
        <Projects />
        {/* <a
        href="https://www.flaticon.com/free-icons/portfolio"
        title="portfolio icons"
        >
        Portfolio icons created by Smashicons - Flaticon
      </a> */}
      </Container>
    </>
  );
}
const BackGround = styled.div`
  position: fixed;
  top: 0;
  /* width: 1000px; */
  height: 1000px;
  background-image: url("/images/faceIcon.png");
`;
const Container = styled.div`
  padding: 0 10rem;
  font-family: "Noto Sans KR", sans-serif;
`;

export default App;
