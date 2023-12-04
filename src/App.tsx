import { useState } from "react";
import styled from "styled-components";
import GlobalStyles from "./styles/globalStyles.ts";
import LandingMain from "./components/LandingMain";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe.tsx";
import Skills from "./components/Skills.tsx";
import Archive from "./components/Archive.tsx";

function App() {
  return (
    <>
      <Container>
        <GlobalStyles />
        <LandingMain />
      </Container>
      <Header />
      <Container>
        <AboutMe />
        <Skills />
        <Archive />
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
const Container = styled.div`
  padding: 0 10rem;
  font-family: "Noto Sans KR", sans-serif;
`;

export default App;
