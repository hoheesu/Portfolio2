import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import SkillIcon from "./SkillIcon";
import { getSkillData } from "../api/api";

interface CircleStyle {
  angle: number;
}

function Skills() {
  const [leftCircle, setLeftCircle] = useState(false);
  const [rightCircle, setRightCircle] = useState(false);

  function leftCircleClick() {
    setLeftCircle(!leftCircle);
  }
  function rightCircleClick() {
    setRightCircle(!rightCircle);
  }

  useEffect(() => {
    getSkillData();
  }, []);
  // const skillIncrement = 360 / skillItems.length;
  // const etcIncrement = 360 / etcItems.length;

  return (
    <SkillContainer className="SkillContainer">
      <CircleContainer className="CircleContainer">
        <IconContainer
          className={leftCircle ? "IconContainer active" : "IconContainer"}
        >
          {/* {skillItems.map((Icon, index) => (
            <CircleIcon key={index} angle={index * skillIncrement}>
              <SkillIcon key={index} icon={Icon} iconType={"skill"} />
            </CircleIcon>
          ))} */}
        </IconContainer>
        <Button
          className={leftCircle ? "active" : ""}
          onClick={() => leftCircleClick()}
        >
          Front-end
        </Button>
      </CircleContainer>

      <CircleContainer className="CircleContainer">
        <IconContainer
          className={rightCircle ? "IconContainer active" : "IconContainer"}
        >
          {/* {etcItems.map((Icon, index) => (
            <CircleIcon key={index} angle={index * etcIncrement}>
              <SkillIcon key={index} icon={Icon} iconType={"etc"} />
            </CircleIcon>
          ))} */}
        </IconContainer>
        <Button
          className={rightCircle ? "active" : ""}
          onClick={() => rightCircleClick()}
        >
          Etc
        </Button>
      </CircleContainer>
    </SkillContainer>
  );
}
const SkillContainer = styled.div`
  height: 85vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const CircleContainer = styled.div`
  position: relative;
  width: 30%;
  height: 30%;
`;

const IconContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-180deg);
  transition: all 0.5s ease-in;
  opacity: 0;
  &.active {
    opacity: 1;
    transform: translate(-50%, -50%) rotate(0deg);
  }
`;

const CircleIcon = styled.div<CircleStyle>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  border: 2px solid var(--color-black);
  display: flex;
  justify-content: center;
  align-items: center;
  transform: ${(props) =>
    `translate(-50%, -50%) rotate(${props.angle}deg) translate(200px) rotate(-${props.angle}deg)`};
  transition: all 0.5s ease-in-out;
  img {
    width: 2rem;
    height: 2rem;
    transition: all 0.5s ease-in-out;
  }
  &:hover {
    border: transparent;
    img {
      width: 6rem;
      height: 6rem;
      filter: drop-shadow(5px 5px 5px #33333355);
    }
  }
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  width: 30rem;
  height: 30rem;
  box-shadow: -5px -5px 10px 0px rgba(0, 0, 0, 0.3),
    5px 5px 10px 0px rgba(0, 0, 0, 0.3);
  transition: all 0.5s ease-in-out;
  font-size: 2.5rem;
  background-color: var(--color-black);
  color: var(--color-white);
  font-weight: 700;
  &.active {
    border: transparent;
    background-color: var(--color-white);
    color: var(--color-black);
    width: 15rem;
    height: 15rem;
    font-size: 2rem;
  }
`;
export default Skills;
