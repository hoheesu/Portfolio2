import React from "react";
import ProjectWeb from "./ProjectWeb";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Navigation } from "swiper/modules";

function Projects() {
  return (
    <div className="container">
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
    </div>
  );
}
const SwiperStyle = styled(Swiper)`
  width: 100%;
  height: 100%;
`;

export default Projects;
