import React from "react";
import styled from "styled-components";
interface Props {
  num: string;
}
function ProjectWeb(props: Props) {
  return (
    <FlexBox>
      <h1>{props.num}</h1>
      <LeftBox className="left-box"></LeftBox>
      <RightBox className="right-box"></RightBox>
    </FlexBox>
  );
}
const FlexBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
const LeftBox = styled.div`
  background-color: #fff;
`;
const RightBox = styled.div`
  background-color: #333;
`;

export default ProjectWeb;
