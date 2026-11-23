import { describe, it, expect, beforeAll } from "@jest/globals";
import { changeNavigationColor } from "../../../redux/navigationColor/navigationColorAction";
import navigationColorChangeReducer from "../../../redux/navigationColor/navigationColorReducer";
import configureStore from "redux-mock-store";
import colors from "../../../data/navigation-color.json";

const store = configureStore({ reducer: navigationColorChangeReducer });

describe("addNavigationColor", () => {
  let storeFactory;
  beforeAll(() => {
    storeFactory = store(colors[2]);
    storeFactory.dispatch(changeNavigationColor(colors[0]));
  });
  it("store should set the navigation name", () =>
    expect(storeFactory.getState().navigation).toBe("news"));
  it("store should set navigation color", () =>
    expect(storeFactory.getState().color).toBe("#4096C8"));

  it("changeNavigationColor action should return the navigation color", () =>
    expect(storeFactory.getActions()[0].color).toBe(colors[0].color));
  it("changeNavigationColor action should return navigation name", () =>
    expect(storeFactory.getActions()[0].navigation).toBe(colors[0].navigation));
});
