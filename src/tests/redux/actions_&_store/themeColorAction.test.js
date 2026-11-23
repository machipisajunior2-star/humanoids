import { describe, it, expect, beforeAll } from "@jest/globals";
import { changeColor } from "../../../redux/themeColor/themeColorAction";
import themeColorReducer from "../../../redux/themeColor/themeColorReducer";
import configureStore from "redux-mock-store";
import colors from "../../../data/theme-color-data.json";

const store = configureStore({ reducer: themeColorReducer });

describe("addThemeColor", () => {
  let storeFactory;
  beforeAll(() => {
    storeFactory = store({
      colorPalette: {
        background: colors[0].background,
        text: colors[0].text,
      },
      id: colors[0].id,
    });
    storeFactory.dispatch(
      changeColor(
        {
          background: colors[2].background,
          text: colors[2].text,
        },
        colors[2].id,
      ),
    );
  });

  it("store should add the id", () =>
    expect(storeFactory.getState().id).toBe("01"));
  it("store should set the colorPalette background", () =>
    expect(storeFactory.getState().colorPalette.background).toBe(
      colors[0].background,
    ));
  it("store should set the colorPalette color", () =>
    expect(storeFactory.getState().colorPalette.text).toBe(colors[0].text));

  it("changeColor action should return the id", () =>
    expect(storeFactory.getActions()[0].id).toBe("03"));
  it("changeColor action should return the background color", () =>
    expect(storeFactory.getActions()[0].colorPalette.background).toBe(
      "#092328",
    ));
  it("changeColor action should return the text color", () =>
    expect(storeFactory.getActions()[0].colorPalette.text).toBe("#D8E1E7"));
});
