import React from "react";
import { expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";
import NavComponent from "../../components/NavComponent";

test("renders an nav text", async () => {
  render(
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Provider store={store}>
        <NavComponent />
      </Provider>
    </Router>,
  );
  const h1 = screen.getByText("HUMANOIDS");
  expect(h1).toHaveTextContent("HUMANOIDS");

  const li = screen.queryAllByText("Categories");
  expect(li[0]).toHaveTextContent("Categories");

  const li2 = screen.queryAllByText("Learn");
  expect(li2[0]).toHaveTextContent("Learn");

  const li3 = screen.queryAllByText("News");
  expect(li3[0]).toHaveTextContent("News");

  const li4 = screen.queryAllByText("Search");
  expect(li4[0]).toHaveTextContent("Search");
});
