/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "../../styling/carousel.css";

export default function MyScroller(props) {
  const { data, videos, focusVideo, handle_thumb, thumbnail, theme, color } = props;
  const [orientation, setOrientation] = useState(window.innerWidth > 800 ? "Desktop" : "Mobile")

  window.addEventListener("resize", () => {
    window.innerWidth > 800 ? setOrientation("Desktop") : setOrientation("Mobile")
  })
  return (
    <div className="scroller-container">
      <Swiper
        modules={[Pagination, Scrollbar, A11y]}
        spaceBetween={1}
        slidesPerView={orientation === "Desktop" ? 3 : 2}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        direction={orientation === "Desktop" ? "vertical" : "horizontal"}
      >
        {videos.slice(1).map((video, i) => (
          <SwiperSlide key={i}>
            <button
              className="scroller_button"
              key={`scroller_button_${i}`}
              onClick={() => handle_thumb(video)}
              // eslint-disable-next-line react/no-unknown-property
              css={css({
                ":hover .video_thumbnail": {
                  border: `5px solid ${theme.text}`,
                },
              })}
            >
              <img
                className="video_thumbnail"
                src={thumbnail(video)}
                alt={`${data[0].name} 1`}
                style={{
                  border: focusVideo === video ? `5px solid ${color}` : "",
                }}
              />
            </button>
          </SwiperSlide>
        ))}
        ...
      </Swiper>
    </div>
  );
}

MyScroller.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  videos: PropTypes.arrayOf(PropTypes.string).isRequired,
  focusVideo: PropTypes.string,
  handle_thumb: PropTypes.func.isRequired,
  thumbnail: PropTypes.func.isRequired,
  theme: PropTypes.shape({
    text: PropTypes.string.isRequired,
  }).isRequired,
  color: PropTypes.string.isRequired,
};
