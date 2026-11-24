import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "../../styling/carousel.css";

export default function MyCarousel(props) {
  const { slides, color } = props;
  return (
    <div className="container" style={{ "--button-color": color }}>
      <Swiper
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={400}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
      >
        {slides.map((image, i) => (
          <SwiperSlide key={i}>
            <div className="carousel_image_container">
              <img
                className="embla_humanoid_image"
                src={image}
                alt={`humanoid ${i}`}
              />
            </div>
          </SwiperSlide>
        ))}
        ...
      </Swiper>
    </div>
  );
}

MyCarousel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.string).isRequired,
  color: PropTypes.string,
};
