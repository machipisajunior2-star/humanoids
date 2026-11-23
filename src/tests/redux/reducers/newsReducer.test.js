import { describe, it, expect } from "@jest/globals";
import {
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAILURE,
} from "../../../redux/news/newsType";
import newsReducer from "../../../redux/news/newsReducer";

const storage = JSON.parse(localStorage.getItem("news"));
describe("NEWS Reducer", () => {
  it("FETCH_NEWS request", () => {
    const state = {};
    const action = {
      type: FETCH_NEWS_REQUEST,
      loading: true,
      news: {},
      error: "",
    };
    const results = newsReducer(state, action);
    expect(results).toEqual({
      ...state,
      loading: true,
    });
  });
  it("FETCH_NEWS success", () => {
    const state = {};
    const action = {
      type: FETCH_NEWS_SUCCESS,
      payload: [{ title: "hello", url: "hello.com" }],
    };
    const results = newsReducer(state, action);
    expect(results).toEqual({
      ...state,
      loading: false,
      news: action.payload,
      error: "",
    });
  });
  it("FETCH_NEWS failure", () => {
    const state = {};
    const action = {
      type: FETCH_NEWS_FAILURE,
      payload: [{ error: "404 found" }],
    };
    const results = newsReducer(state, action);
    expect(results).toEqual({
      ...state,
      loading: false,
      news: storage,
      error: action.payload,
    });
  });
});
