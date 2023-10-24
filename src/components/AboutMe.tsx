import React, { useState, useEffect } from "react";
import styled from "styled-components";

function AboutMe() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    console.log(scrollPosition);
  }, []);
  return (
    <AboutMeContainer>
      <LeftBox>
        <img src="/images/faceIcon.png" alt="" />
      </LeftBox>
      <RightBox>
        <p
          className={
            scrollPosition > 200 && scrollPosition < 1000
              ? "scroll-text"
              : "scrolled-text"
          }
        >
          언제나 <strong>밝고 긍정적인</strong> 프론트엔드 개발자가 되고싶은
          <strong> 윤준수</strong>입니다. 사용자들과
          <br />
          <strong>상상속 아이디어</strong>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sed
          illo, repudiandae maxime dolorum odio dolor, vel, totam ducimus
          tempora ea molestiae autem doloremque! Nobis nostrum optio inventore
          illum cumque!
          <br />
          <strong>Lorem, ipsum dolor.</strong>Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Rem accusamus, iure doloremque, aliquam
          maiores pariatur voluptatibus delectus libero ullam ipsam a nisi
          eligendi? Accusamus nam cum pariatur tenetur itaque vero.
          <strong>Lorem, ipsum.</strong>Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Nostrum aperiam tempora vel itaque ullam assumenda
          voluptate ex veritatis natus facere cumque incidunt, dolorem tenetur
          deleniti nulla, excepturi aut autem. Rem.
        </p>
      </RightBox>
    </AboutMeContainer>
  );
}
const AboutMeContainer = styled.div`
  display: flex;
  height: 200vh;
`;
const LeftBox = styled.div``;
const RightBox = styled.div`
  .scroll-text {
    strong {
      font-weight: 500;
      color: #1261d6;
      transition: 0.7s;
    }
  }
  .scrolled-text {
    color: #333;
    transition: 1.5s;
  }
`;

export default AboutMe;
