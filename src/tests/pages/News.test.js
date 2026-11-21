import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";
import News from "../../pages/News";

test("renders an h1", async () => {
  render(
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Provider store={store}>
          <News />
      </Provider>
      </Router>,
  );
  const h1 = await screen.findByText(/Humanoid News/);
  expect(h1).toHaveTextContent("Humanoid News");
});
