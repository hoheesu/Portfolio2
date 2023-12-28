import React from "react";
import styled from "styled-components";

function ProjectWeb() {
  return (
    <FlexBox>
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
