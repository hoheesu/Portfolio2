import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import SkillIcon from "./SkillIcon";
import { getSkillData, getToolData } from "../api/api";
import { skillArrayType, skillDataType } from "../type";

interface CircleStyle {
  angle: number;
}

function Skills() {
  const [skillCircle, setSkillCircle] = useState<boolean>(false);
  const [toolCircle, setToolCircle] = useState<boolean>(false);

  const [skillHover, setSkillHover] = useState([false, "title", "detail"]);
  const [toolHover, setToolHover] = useState([false, "title", "detail"]);

  const [skillData, setSkillData] = useState<skillArrayType>([]);
  const [toolData, setToolData] = useState<skillArrayType>([]);

  useEffect(() => {
    getSkillData(setSkillData);
    getToolData(setToolData);
  }, []);

  return (
    <SkillContainer>
      <CircleContainer>
        <IconContainer className={skillCircle ? "active" : ""}>
          {skillCircle
            ? skillData.map((data: skillDataType, index) => {
                return (
                  <CircleIcon
                    key={index}
                    angle={(index * 360) / skillData.length}
                    onMouseEnter={() =>
                      setSkillHover([true, `${data.title}`, `${data.detail}`])
                    }
                    onMouseLeave={() =>
                      setSkillHover([false, "title", "detail"])
                    }
                  >
                    <SkillIcon key={index} data={data} />
                  </CircleIcon>
                );
              })
            : ""}
        </IconContainer>
        <Button
          className={skillCircle ? "active" : ""}
          onClick={() => setSkillCircle(!skillCircle)}
        >
          {skillHover[0] ? (
            <>
              <ButtonText className={skillHover[0] ? "" : "none"}>
                <h1>{skillHover[1]}</h1> <span>{skillHover[2]}</span>
              </ButtonText>
            </>
          ) : (
            <>
              <ButtonText className="none"></ButtonText>
              <p>Front-end</p>
            </>
          )}
        </Button>
      </CircleContainer>

      <CircleContainer className="CircleContainer">
        <IconContainer
          className={toolCircle ? "IconContainer active" : "IconContainer"}
        >
          {toolData.map((data: skillDataType, index) => {
            return (
              <CircleIcon
                key={index}
                angle={(index * 360) / toolData.length}
                onMouseEnter={() =>
                  setToolHover([true, `${data.title}`, `${data.detail}`])
                }
                onMouseLeave={() => setToolHover([false, "title", "detail"])}
              >
                <SkillIcon key={index} data={data} />
              </CircleIcon>
            );
          })}
        </IconContainer>
        <Button
          className={toolCircle ? "active" : ""}
          onClick={() => setToolCircle(!toolCircle)}
        >
          {toolHover[0] ? (
            <>
              <ButtonText className={toolHover[0] ? "" : "none"}>
                <h1>{toolHover[1]}</h1> <span>{toolHover[2]}</span>
              </ButtonText>
            </>
          ) : (
            <>
              <ButtonText className="none"></ButtonText>
              <p>Tool</p>
            </>
          )}
        </Button>
      </CircleContainer>
    </SkillContainer>
  );
}
const ButtonText = styled.div`
  font-size: 1.5rem;
  opacity: 1;
  scale: 1;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 0.5rem;
  transition: all 0.5s ease-in-out;
  span {
    font-size: 1rem;
  }
  &.none {
    opacity: 0;
    scale: -1;
    transition: all 0s ease-in-out;
  }
`;
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
  p {
    transition: all 0.5s ease-in-out;
  }
  &.active {
    border: transparent;
    background-color: var(--color-white);
    color: var(--color-black);
    width: 15rem;
    height: 15rem;
    p {
      opacity: 0;
      transform: rotate(90deg);
      scale: 0;
    }
  }
`;
export default Skills;
