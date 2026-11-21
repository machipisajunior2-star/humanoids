import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";
import Learn from "../../pages/Learn";

test("renders an h1", () => {
  render(
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Provider store={store}>
        <Learn />
      </Provider>
    </Router>,
  );
  const h1 = screen.queryAllByText(/Learn About Humanoids/);
  expect(h1[h1.length - 1]).toHaveTextContent("Learn About Humanoids");
});
