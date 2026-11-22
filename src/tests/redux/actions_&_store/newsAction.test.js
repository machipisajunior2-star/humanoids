import { describe, it, expect, beforeAll } from "@jest/globals";
import {
  fetchNewsRequest,
  fetchNewsSuccess,
  fetchNewsFailure,
} from "../../../redux/news/newsActions";

import {
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAILURE,
} from "../../../redux/news/newsType";
import newsReducer from "../../../redux/news/newsReducer";
import configureStore from "redux-mock-store";

const newsData = [
  {
    id: "8e3bffb6-f8ae-5ee2-b81e-328f060a6e6c",
    title:
      "Phantom MKII: Foundation unveils 2nd-gen battlefield humanoid robot",
    description:
      "Foundation unveils Phantom MKII humanoid robot and Cortex II AI, claiming a 200-pound payload capacity and weatherproofing for harsh terrain",
    url: "https://interestingengineering.com/ai-robotics/us-foundation-phantom-mkii-humanoid-robot",
    author: "Kaif Shaikh",
    image:
      "https://cms.interestingengineering.com/wp-content/uploads/2026/11/Thumbnails-for-IE-Foundation-phantom-mk2-2.jpg",
    language: "en",
    category: ["technology", "science"],
    source_category: ["technology", "science"],
    published: "2026-11-20 13:46:04 +0000",
  },
  {
    id: "f4f7963d-c513-52d6-99c7-2f71a47daba7",
    title:
      "Pan-International targets 2027 optical connector and humanoid robot motor launches",
    description:
      "Pan-International Industrial Corp. is targeting initial shipments of high-density MMC optical-fiber connectors in the first quarter of 2027 and plans to launch motors for humanoid robots in the third quarter of 2027. The Taiwan-based manufacturer is expanding into AI infrastructure, optical communic...",
    url: "https://www.digitimes.com/news/a20261120PD238/2027-robot-shipments-automotive-mmc.html",
    author: "Ninelu Tu; Taipei",
    image: "https://img.digitimes.com/newsshow/20261120pd238_files/1_2b.jpg",
    language: "en",
    category: ["technology"],
    source_category: ["technology"],
    published: "2026-11-20 07:22:48 +0000",
  },
  {
    id: "e334a3b0-34b9-531d-aa05-b0c567c084ed",
    title:
      "Before You Buy (or Build On) a Humanoid Robot: A Developer's Evaluation Checklist",
    description:
      "Humanoid robots went from conference demos to things you can actually put a deposit on. That's...",
    url: "https://dev.to/toddlavergne/before-you-buy-or-build-on-a-humanoid-robot-a-developers-evaluation-checklist-49af",
    author: "Todd Lavergne",
    image:
      "https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fukxrpc3ex3hf3owy4i8y.png",
    language: "en",
    category: ["programming"],
    source_category: ["programming"],
    published: "2026-11-20 04:57:38 +0000",
  },
];

const store = configureStore({ reducer: newsReducer });

describe("fetchNews storing", () => {
  let storeFactory;
  beforeAll(() => {
    storeFactory = store({
      loading: false,
      news: newsData[0],
      error: "",
    });
    storeFactory.dispatch(fetchNewsRequest());
    storeFactory.dispatch(fetchNewsSuccess(newsData));
    storeFactory.dispatch(fetchNewsFailure("404 found"));
  });

  it("store should add a news object", () =>
    expect(storeFactory.getState().news).toBe(newsData[0]));
  it("store should set the loading property", () =>
    expect(storeFactory.getState().loading).toBe(false));
  it("store should set error the property", () =>
    expect(storeFactory.getState().error).toBe(""));

  it("dispatch fetchNewsRequest action should return the action type", () =>
    expect(storeFactory.getActions()[0].type).toBe(FETCH_NEWS_REQUEST));

  it("dispatch fetchNewsSuccess action should return the action type", () =>
    expect(storeFactory.getActions()[1].type).toBe(FETCH_NEWS_SUCCESS));
  it("dispatch fetchNewsSuccess action should return the news payload", () =>
    expect(storeFactory.getActions()[1].payload).toBe(newsData));

  it("dispatch fetchNewsFailure action should return the action type", () =>
    expect(storeFactory.getActions()[2].type).toBe(FETCH_NEWS_FAILURE));
  it("dispatch fetchNewsFailure action should return the error message payload", () =>
    expect(storeFactory.getActions()[2].payload).toBe("404 found"));
});
