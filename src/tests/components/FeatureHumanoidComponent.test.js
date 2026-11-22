import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";
import FeatureHumanoidComponent from "../../components/FeatureHumanoidComponent";
import data from "../../data/data.json";

test("renders an h1", () => {
  render(
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Provider store={store}>
        <FeatureHumanoidComponent id={0} />
      </Provider>
    </Router>,
  );
  const h1 = screen.getByText(data[0].name);
  expect(h1).toHaveTextContent(data[0].name);
});
