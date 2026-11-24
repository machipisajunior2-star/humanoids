/* eslint-disable no-undef */
import { expect, test } from "@jest/globals";
import React from "react";
import { render, screen } from "@testing-library/react";
import Videos from "../../components/Videos";

jest.mock("swiper", () => {
  const PropTypes = jest.requireActual("prop-types");
  const Swiper = ({ children }) => (
    <div data-testid="swiper-testid">{children}</div>
  );
  Swiper.propTypes = { children: PropTypes.node };

  const SwiperSlide = ({ children }) => (
    <div data-testid="swiper-slide-testid">{children}</div>
  );
  SwiperSlide.propTypes = { children: PropTypes.node };

  return { Swiper, SwiperSlide };
});

test("render videos", () => {
  render(
    <Videos
      video_id={[
        "uVcBa6NXAbk",
        "LTYMWadOW7c",
        "j31dmodZ-5c",
        "f3c4mQty_so",
        "NIHU7Y8-8k4",
      ]}
      color="#4C2365"
      theme={{
        background: "#1F2937",
        text: "#d9d9d9",
      }}
    />,
  );
  const text = screen.getAllByRole("button", "1x NEO");
  expect(text.length).toBe(5);
});
