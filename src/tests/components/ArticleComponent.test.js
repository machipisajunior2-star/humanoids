import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";
import ArticleComponent from "../../components/ArticleComponent";
import data from "../../data/articles.json";

test("renders an h1", () => {
  render(
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Provider store={store}>
        <ArticleComponent id={0} />
      </Provider>
    </Router>,
  );
  const h1 = screen.getByText(data[0].title);
  expect(h1).toHaveTextContent(data[0].title);
});
