import React from "react";
import { expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";
import HumanoidComponent from "../../components/HumanoidComponent";
import data from "../../data/data.json";

test("renders an h1", () => {
  render(
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Provider store={store}>
        <HumanoidComponent data={data[0]} i={0} />
      </Provider>
    </Router>,
  );
  const h1 = screen.getByText(data[0].name);
  expect(h1).toHaveTextContent(data[0].name);
});
