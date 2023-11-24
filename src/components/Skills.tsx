import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import SkillIcon from "./SkillIcon";
interface CircleStyle {
  angle: number;
}
const skillItems = [
  "html",
  "css",
  "js",
  "react",
  "ts",
  "sass",
  "redux",
  "styledComponents",
];
const etcItems = ["git", "github", "slack", "figma"];
function Skills() {
  const [leftCircle, setLeftCircle] = useState(false);
  const [rightCircle, setRightCircle] = useState(false);

  function leftCircleClick() {
    setLeftCircle(!leftCircle);
  }
  function rightCircleClick() {
    setRightCircle(!rightCircle);
  }

  useEffect(() => {}, []);
  const skillIncrement = 360 / skillItems.length;
  const etcIncrement = 360 / etcItems.length;

  return (
    <SkillContainer className="SkillContainer">
      <CircleContainer className="CircleContainer">
        <IconContainer
          className={leftCircle ? "IconContainer active" : "IconContainer"}
        >
          {skillItems.map((Icon, index) => (
            <CircleIcon key={index} angle={index * skillIncrement}>
              <img src={`/images/skill-icons/icon-${Icon}.svg`} alt="" />
            </CircleIcon>
          ))}
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
          {etcItems.map((Icon, index) => (
            <CircleIcon key={index} angle={index * etcIncrement}>
              <img src={`/images/etc-icons/icon-${Icon}.svg`} alt="" />
            </CircleIcon>
          ))}
        </IconContainer>
        <Button
          className={rightCircle ? "active" : ""}
          onClick={() => rightCircleClick()}
        ></Button>
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
  > img {
    width: 2rem;
    height: 2rem;
    transition: all 0.5s ease-in-out;
  }
  &:hover {
    border: transparent;
    > img {
      width: 7rem;
      height: 7rem;
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
  box-shadow: -5px -5px 10px 0px rgba(255, 255, 255, 0.5),
    5px 5px 10px 0px rgba(0, 0, 0, 0.3);
  transition: all 0.5s ease-in-out;
  &.active {
    border: transparent;
    box-shadow: inset -5px -5px 10px 0px rgba(255, 255, 255, 0.5),
      inset 5px 5px 10px 0px rgba(0, 0, 0, 0.3);
    width: 15rem;
    height: 15rem;
  }
`;
export default Skills;
