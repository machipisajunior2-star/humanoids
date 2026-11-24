import React from "react";
import { expect, jest, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";
import Product from "../../pages/Product";
import data from "../../data/data.json";

jest.mock("html-react-parser", () => {
  return () => [null];
});

jest.mock("swiper", () => {
  // eslint-disable-next-line no-undef
  const PropTypes = require("prop-types");
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

jest.mock("embla-carousel-react", () => {
  return () => [null];
});

test("renders an h1", async () => {
  render(
    <MemoryRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      initialEntries={[`/product/${data[0].slag}`]}
    >
      <Provider store={store}>
        <Routes>
          <Route path="product/:productSlag" element={<Product />}></Route>
        </Routes>
      </Provider>
    </MemoryRouter>,
  );
  const h1 = await screen.findByText(data[0].name);
  expect(h1).toHaveTextContent(data[0].name);
});
