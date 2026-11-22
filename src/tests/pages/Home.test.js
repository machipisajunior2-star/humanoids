/* eslint-disable no-undef */
import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { expect, test } from "@jest/globals";
import store from "../../redux/store";
import Home from "../../pages/Home";

jest.mock("../../utils", () => ({
  configeAnimation: jest.fn(),
  colorPicker: jest.fn(),
}));

test("renders an h1", () => {
  render(
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Provider store={store}>
        <Home />
      </Provider>
    </Router>,
  );
  const h1 = screen.getByText(/LATEST HUMANOIDS/);
  expect(h1).toHaveTextContent("LATEST HUMANOIDS");
});
