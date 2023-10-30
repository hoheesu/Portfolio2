import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BiRename, BiMailSend } from "react-icons/bi";
import { FaBirthdayCake, FaSearchLocation } from "react-icons/fa";

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
      <LeftBox className="left-box">
        <img src="/images/faceIcon.png" alt="Face Icon" />
        <ul>
          <li>
            <BiRename />
            <p>이름</p>
            <p>윤준수</p>
          </li>
          <li>
            <FaBirthdayCake />
            <p>생년월일</p>
            <p>2001.01.31</p>
          </li>
          <li>
            <FaSearchLocation />
            <p>주소지</p>
            <p>서울시 강동구</p>
          </li>
          <li>
            <BiMailSend />
            <p>E-Mail</p>
            <p>hoheesu1@naver.com</p>
          </li>
        </ul>
      </LeftBox>
      <RightBox className="right-box">
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
  /* justify-content: center; */
  align-items: center;
  height: 85vh;
`;
const LeftBox = styled.div``;
const RightBox = styled.div`
  p {
    line-height: 1.5rem;
  }
  .scroll-text {
    strong {
      font-weight: 500;
      font-size: 1.2rem;
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
