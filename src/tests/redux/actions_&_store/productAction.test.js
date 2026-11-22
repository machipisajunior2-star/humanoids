import { describe, it, expect, beforeAll } from "@jest/globals";
import {
  fetchProductRequest,
  fetchProductSuccess,
  fetchProductFailure,
} from "../../../redux/product/productActions";

import {
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
} from "../../../redux/product/productType";
import productReducer from "../../../redux/product/productReducer";
import configureStore from "redux-mock-store";
import productMockData from "../../../data/data.json";

const store = configureStore({ reducer: productReducer });

describe("fetchNews storing", () => {
  let storeFactory;
  beforeAll(() => {
    storeFactory = store({
      loading: false,
      news: productMockData[0],
      error: "",
    });
    storeFactory.dispatch(fetchProductRequest());
    storeFactory.dispatch(fetchProductSuccess(productMockData[1]));
    storeFactory.dispatch(fetchProductFailure("404 found"));
  });

  it("store should add a news object", () =>
    expect(storeFactory.getState().news).toBe(productMockData[0]));
  it("store should set the loading property", () =>
    expect(storeFactory.getState().loading).toBe(false));
  it("store should set error the property", () =>
    expect(storeFactory.getState().error).toBe(""));

  it("dispatch fetchProductRequest action should return the action type", () =>
    expect(storeFactory.getActions()[0].type).toBe(FETCH_PRODUCT_REQUEST));

  it("dispatch fetchProductSuccess action should return the action type", () =>
    expect(storeFactory.getActions()[1].type).toBe(FETCH_PRODUCT_SUCCESS));
  it("dispatch fetchProductSuccess action should return the news payload", () =>
    expect(storeFactory.getActions()[1].payload).toBe(productMockData[1]));

  it("dispatch fetchProductFailure action should return the action type", () =>
    expect(storeFactory.getActions()[2].type).toBe(FETCH_PRODUCT_FAILURE));
  it("dispatch fetchProductFailure action should return the error message payload", () =>
    expect(storeFactory.getActions()[2].payload).toBe("404 found"));
});
