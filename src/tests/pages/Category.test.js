import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { setCategoryColor } from "../../redux/categoryColor/categoryColorAction";
import store from "../../redux/store";
import Category from "../../pages/Category";
import categoryColors from "../../data/category-color.json";

test("renders an h1", () => {
  store.dispatch(setCategoryColor(categoryColors[0].category));
  render(
    <MemoryRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      initialEntries={[`/category/${categoryColors[0].category}`]}
    >
      <Provider store={store}>
        <Routes>
          <Route path="category/:useType" element={<Category />}></Route>
        </Routes>
      </Provider>
    </MemoryRouter>,
  );
  const h1 = screen.queryAllByText(
    categoryColors[0].category.charAt(0).toLocaleUpperCase() +
      categoryColors[0].category.slice(1),
  );
  expect(h1[0]).toHaveTextContent(
    categoryColors[0].category.charAt(0).toLocaleUpperCase() +
      categoryColors[0].category.slice(1),
  );
});
