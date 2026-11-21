import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";
import Contact from "../../pages/Contact";

test("renders an h1", () => {
  render(
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Provider store={store}>
        <Contact />
      </Provider>
    </Router>,
  );
  const h1 = screen.queryAllByText(/Contact/);
  expect(h1[h1.length - 1]).toHaveTextContent("Contact");
  expect(h1.length).toBe(5);
});
