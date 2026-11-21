import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";
import Article from "../../pages/Article";
import articles from "../../data/articles.json";

jest.mock("html-react-parser", () => {
  return () => [null];
});

test("renders an h1", () => {
  render(
    <MemoryRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      initialEntries={[`/learn/${articles[0].title.replace("?", "%3f")}`]}
    >
      <Provider store={store}>
        <Routes>
          <Route path="learn/:article" element={<Article />}></Route>
        </Routes>
      </Provider>
    </MemoryRouter>,
  );
  const h1 = screen.queryAllByText(articles[0].title);
  expect(h1[0]).toHaveTextContent(articles[0].title);
});
