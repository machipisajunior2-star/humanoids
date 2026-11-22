import React from "react";
import { test, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";
import About from "../../pages/About";

test("renders an h1", () => {
  render(
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Provider store={store}>
        <About />
      </Provider>
    </Router>,
  );
  const h1 = screen.queryAllByText(/About/);
  expect(h1[h1.length - 1]).toHaveTextContent("About");
  expect(h1.length).toBe(3);
});
