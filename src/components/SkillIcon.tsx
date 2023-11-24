import React from "react";
import styled from "styled-components";

interface Props {
  folder: string;
  item: string;
}
function SkillIcon(props: Props) {
  console.log(props);
  return (
    <div>
      <img
        // src={`/images/${props.folder}-icons/icon-${props.item}.svg`}
        alt=""
      />
    </div>
  );
}

export default SkillIcon;
