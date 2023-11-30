import React from "react";
import styled from "styled-components";
import { skillDataType } from "../type";

interface Props {
  data: skillDataType;
}

function SkillIcon(props: Props) {
  const data = props.data;
  console.log(data.id);
  return (
    <div>
      <img
        src={`/images/${data.type}-icons/icon-${data.id}.svg`}
        alt={`${data.title}`}
      />
    </div>
  );
}

export default SkillIcon;
