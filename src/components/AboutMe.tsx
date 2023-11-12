import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BiRename } from "react-icons/bi";
import { FaBirthdayCake, FaSearchLocation } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { CopyToClipboard } from "react-copy-to-clipboard";

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
        <Ul>
          <List>
            <span>
              <strong>
                <BiRename /> 이름
              </strong>
              <p>윤준수</p>
            </span>
          </List>
          <List>
            <span>
              <strong>
                <FaBirthdayCake /> 생년월일
              </strong>
              <p>2001.01.31</p>
            </span>
          </List>
          <List>
            <span>
              <strong>
                <FaSearchLocation /> 주소지
              </strong>
              <p>서울시 강동구</p>
            </span>
          </List>
          <List>
            <CopyToClipboard
              text="hoheesu1@naver.com"
              onCopy={() => alert("주소가 복사되었습니다")}
            >
              <span>
                <strong>
                  <GrMail /> 이메일
                </strong>
                <p>hoheesu1@naver.com</p>
              </span>
            </CopyToClipboard>
          </List>
        </Ul>
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
  align-items: center;
  height: 85vh;
`;
const LeftBox = styled.div`
  gap: 2rem;
`;
const Ul = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 5rem;
  flex-wrap: wrap;
  row-gap: 1rem;
`;
const List = styled.li`
  width: 50%;
  span {
    display: flex;
    flex-direction: column;
    justify-items: center;
    text-align: center;
  }
  strong {
    font-size: 1.2rem;
    color: #333;
    margin-bottom: 0.3rem;
  }
  &:nth-last-child(1) {
    cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='40'><rect rx='20' width='100%' height='100%' fill='black' opacity='70%' /><text x='50%' y='50%' font-family='sans-serif' font-weight='bold' font-size='14' dominant-baseline='middle' text-anchor='middle' fill='white'>클립보드</text></svg>")
        16 0,
      auto;
  }
`;
const RightBox = styled.div`
  p {
    line-height: 1.5rem;
  }
  .scroll-text {
    strong {
      font-weight: 500;
      font-size: 1.2rem;
      color: #1261d6;
      /* color: #8c63be; */
      transition: 0.7s;
    }
  }
  .scrolled-text {
    color: #333;
    transition: 1.5s;
  }
`;

export default AboutMe;
