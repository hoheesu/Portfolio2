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
    console.log(leftCircle);
  }
  function rightCircleClick() {
    setRightCircle(!rightCircle);
    console.log(rightCircle);
  }

  useEffect(() => {}, []);
  const skillIncrement = 360 / skillItems.length;
  const etcIncrement = 360 / etcItems.length;

  return (
    <SkillContainer className="SkillContiner">
      <CircleContainer className="circle-container">
        <IconContainer
          className={leftCircle ? "icon-container active" : "icon-container"}
        >
          {skillItems.map((Icon, index) => (
            <CircleIcon
              className={`circle-icon-${index}`}
              key={index}
              angle={index * skillIncrement}
            >
              <img src={`/images/skill-icons/icon-${Icon}.svg`} alt="" />
            </CircleIcon>
          ))}
        </IconContainer>
        <LittleCircle onClick={() => leftCircleClick()}></LittleCircle>
      </CircleContainer>

      <CircleContainer>
        <IconContainer
          className={rightCircle ? "icon-container active" : "icon-container"}
        >
          {etcItems.map((Icon, index) => (
            <CircleIcon
              className={`circle-icon-${index}`}
              key={index}
              angle={index * etcIncrement}
            >
              <img src={`/images/etc-icons/icon-${Icon}.svg`} alt="" />
            </CircleIcon>
          ))}
        </IconContainer>
        <LittleCircle onClick={() => rightCircleClick()}></LittleCircle>
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
`;

const IconContainer = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  &.active {
    opacity: 1;
  }
`;

const CircleIcon = styled.div<CircleStyle>`
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #3498db;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: ${(props) =>
    `rotate(${props.angle}deg) translate(200px) rotate(-${props.angle}deg)`};
  transition: transform 0.5s ease-in-out;
`;

const LittleCircle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  background-color: #333;
`;
export default Skills;
