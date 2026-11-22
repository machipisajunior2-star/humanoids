import React from "react";
import { expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";
import Search from "../../pages/Search";
import data from "../../data/data.json";

test("renders an h1", () => {
  render(
    <MemoryRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      initialEntries={[`/search?q=${data[0].name}`]}
    >
      <Provider store={store}>
        <Routes>
          <Route path="search" element={<Search />}></Route>
        </Routes>
      </Provider>
    </MemoryRouter>,
  );
  const h1 = screen.queryAllByText(data[0].name);
  expect(h1[0]).toHaveTextContent(data[0].name);
});
