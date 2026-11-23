/* eslint-disable no-undef */
import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
import App from "../App";


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
      </Router>);
  const linkElement = screen.getByText(/LATEST HUMANOIDS/i);
  expect(linkElement).toBeInTheDocument();
});
