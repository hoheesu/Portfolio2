import React from "react";
import ProjectWeb from "./ProjectWeb";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

function Projects() {
  return (
    <Container className="container">
      <h2 className="title">React</h2>
      <SwiperStyle
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ProjectWeb num="1" />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectWeb num="2" />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectWeb num="3" />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectWeb num="4" />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectWeb num="5" />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectWeb num="6" />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectWeb num="7" />
        </SwiperSlide>
      </SwiperStyle>
    </Container>
  );
}
const Container = styled.div`
  padding-bottom: 100px;
`;
const SwiperStyle = styled(Swiper)`
  width: 100%;
  height: 100%;
  --swiper-navigation-color: var(--color-white);
  .swiper-pagination-bullet-active {
    --swiper-pagination-color: var(--color-white);
    width: 50px;
    height: 10px;
    border-radius: 10px;
  }
`;

export default Projects;
