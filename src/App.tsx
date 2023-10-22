import { useState } from "react";
import { Reset } from "styled-reset";
import "./app.css";
import LandingMain from "./components/LandingMain";
import Header from "./components/Header";
import styled from "styled-components";

function App() {
  return (
    <>
      <Reset />
      <Header />
      <LandingMain />
    </>
  );
}
export default App;
