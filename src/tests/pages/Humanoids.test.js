import React from "react";
import { expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";
import Humanoids from "../../pages/Humanoids";

test("renders an h1", () => {
  render(
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Provider store={store}>
        <Humanoids />
      </Provider>
    </Router>,
  );
  const h1 = screen.getByText(/Humanoids/);
  expect(h1).toHaveTextContent("Humanoids");
});
