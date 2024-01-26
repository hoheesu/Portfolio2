import React from "react";
import styled from "styled-components";
interface Props {
  num: string;
}
function ProjectWeb(props: Props) {
  return (
    <FlexBox>
      <h1>{props.num}</h1>
    </FlexBox>
  );
}
const FlexBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export default ProjectWeb;
