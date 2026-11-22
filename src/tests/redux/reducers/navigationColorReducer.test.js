import { describe, it, expect } from "@jest/globals";
import { CHANGE_NAVIGATION_COLOR } from "../../../redux/navigationColor/navigationColorType";
import navigationColorChangeReducer from "../../../redux/navigationColor/navigationColorReducer";

describe("navigation color Reducer", () => {
  it("ADD_NAVIGATION_COLOR success", () => {
    const state = {};
    const action = {
      type: CHANGE_NAVIGATION_COLOR,
      color: "#90C3D4",
      navigation: "learn",
    };
    const results = navigationColorChangeReducer(state, action);
    expect(results).toEqual({
      ...state,
      color: "#90C3D4",
      navigation: "learn",
    });
  });
});
