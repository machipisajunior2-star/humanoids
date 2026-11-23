import { describe, it, expect, beforeAll } from "@jest/globals";
import { changeCategoryColor } from "../../../redux/categoryColor/categoryColorAction";
import categoryColorChangeReducer from "../../../redux/categoryColor/categoryColorReducer";
import configureStore from "redux-mock-store";
import colors from "../../../data/category-color.json";

const store = configureStore({ reducer: categoryColorChangeReducer });

describe("addCategoryColor", () => {
  let storeFactory;
  beforeAll(() => {
    const colorData = colors[1];
    storeFactory = store(colorData);
    storeFactory.dispatch(changeCategoryColor(colors[0]));
  });
  it("store should set the category name", () =>
    expect(storeFactory.getState().category).toBe("professional"));
  it("store should set category color", () =>
    expect(storeFactory.getState().color).toBe("#2E7D32"));

  it("changeCategoryColor action should return the category color", () =>
    expect(storeFactory.getActions()[0].color).toBe(colors[0].color));
  it("changeCategoryColor action should return the category name", () =>
    expect(storeFactory.getActions()[0].category).toBe(colors[0].category));
});
