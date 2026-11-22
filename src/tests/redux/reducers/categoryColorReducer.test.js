import { describe, it, expect } from "@jest/globals";
import { CHANGE_CATEGORY_COLOR } from "../../../redux/categoryColor/categoryColorType";
import categoryColorChangeReducer from "../../../redux/categoryColor/categoryColorReducer";

describe("category color Reducer", () => {
  it("ADD_CATEGORY_COLOR success", () => {
    const state = {};
    const action = {
      type: CHANGE_CATEGORY_COLOR,
      color: "#90C3D4",
      category: "consumer",
    };
    const results = categoryColorChangeReducer(state, action);
    expect(results).toEqual({
      ...state,
      color: "#90C3D4",
      category: "consumer",
    });
  });
});
