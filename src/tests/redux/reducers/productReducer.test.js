import { describe, it, expect } from "@jest/globals";
import {
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
} from "../../../redux/product/productType";
import productReducer from "../../../redux/product/productReducer";

describe("Product Reducer", () => {
  it("FETCH_Product request", () => {
    const state = {};
    const action = {
      type: FETCH_PRODUCT_REQUEST,
      loading: false,
      product: {},
      error: "",
    };
    const results = productReducer(state, action);
    expect(results).toEqual({
      ...state,
      loading: true,
    });
  });
  it("FETCH_NEWS success", () => {
    const state = {};
    const action = {
      type: FETCH_PRODUCT_SUCCESS,
      payload: [{ name: "hello", url: "hello.com" }],
    };
    const results = productReducer(state, action);
    expect(results).toEqual({
      ...state,
      loading: false,
      product: action.payload,
      error: "",
    });
  });
  it("FETCH_NEWS failure", () => {
    const state = {};
    const action = {
      type: FETCH_PRODUCT_FAILURE,
      payload: [{ error: "404 found" }],
    };
    const results = productReducer(state, action);
    expect(results).toEqual({
      ...state,
      loading: false,
      product: [],
      error: action.payload,
    });
  });
});
