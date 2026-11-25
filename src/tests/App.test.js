/* eslint-disable no-undef */
import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
import App from "../App";

jest.mock("swiper/react", () => {
  const PropTypes = require("prop-types");
  const Swiper = ({ children }) => (
    <div data-testid="swiper-testid">{children}</div>
  );
  Swiper.propTypes = { children: PropTypes.node };

  return {
    Swiper,
    SwiperSlide: Object.assign(
      ({ children }) => <div data-testid="swiper-slide-testid">{children}</div>,
      { propTypes: { children: PropTypes.node } },
    ),
  };
});

jest.mock("swiper/modules", () => ({
  Navigation: () => null,
  Pagination: () => null,
  Scrollbar: () => null,
  A11y: () => null,
}));

jest.mock("../utils", () => ({
  configeAnimation: jest.fn(),
  colorPicker: jest.fn(),
}));

jest.mock("html-react-parser", () => {
  return () => [null];
});

test("renders learn react link", () => {
  render(
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>,
  );
  const linkElement = screen.getByText(/LATEST HUMANOIDS/i);
  expect(linkElement).toBeInTheDocument();
});
