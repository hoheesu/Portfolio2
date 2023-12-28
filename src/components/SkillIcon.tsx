import React from "react";
import styled from "styled-components";
import { skillDataType } from "../type";

interface Props {
  data: skillDataType;
}
interface TitleType {
  title: string;
}

function SkillIcon(props: Props) {
  const data = props.data;

  return (
    <IconBox title={data.title}>
      <img src={`/images/${data.type}-icons/icon-${data.id}.svg`} />
    </IconBox>
  );
}
const IconBox = styled.div<TitleType>`
  /* cursor: url(${`/images/mouse-dark.svg`}), auto; */
  cursor: ${(prop) =>
    `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='40'><rect rx='20' width='100%' height='100%' fill='black' opacity='70%' /><text x='50%' y='50%' font-family='sans-serif' font-weight='bold' font-size='14' dominant-baseline='middle' text-anchor='middle' fill='white'>${prop.title}</text></svg>") 16 0, auto`};
`;

export default SkillIcon;
