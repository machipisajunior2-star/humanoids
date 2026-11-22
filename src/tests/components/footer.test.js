import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";
import Footer from "../../components/Footer";

test("renders an h3", () => {
  render(
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Provider store={store}>
        <Footer />
      </Provider>
    </Router>,
  );
  const h3 = screen.getByText(/RELATED COMPANIES THAT PRODUCE HUMADOIDS/);
  expect(h3).toHaveTextContent("RELATED COMPANIES THAT PRODUCE HUMADOIDS");

  const h1 = screen.getByText(/HUMANOIDS/);
  expect(h1).toHaveTextContent("HUMANOIDS");
});
