import React from "react";
import styled from "styled-components";

interface Props {
  icon: string;
  iconType: string;
}

function SkillIcon(props: Props) {
  console.log(props);
  return (
    <div>
      <img
        src={`/images/${props.iconType}-icons/icon-${props.icon}.svg`}
        alt=""
      />
    </div>
  );
}

export default SkillIcon;
