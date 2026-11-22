import { describe, it, expect } from "@jest/globals";
import { CHANGE_COLOR } from "../../../redux/themeColor/themeColorType";
import themeColorChangeReducer from "../../../redux/themeColor/themeColorReducer";

describe("theme color Reducer", () => {
  it("ADD_THEME_COLOR success", () => {
    const state = {};
    const action = {
      type: CHANGE_COLOR,
      colorPalette: {
        background: "#000000",
        text: "#ffffff",
      },
      id: 1,
    };
    const results = themeColorChangeReducer(state, action);
    expect(results).toEqual({
      ...state,
      colorPalette: {
        background: "#000000",
        text: "#ffffff",
      },
      id: 1,
    });
  });
});
