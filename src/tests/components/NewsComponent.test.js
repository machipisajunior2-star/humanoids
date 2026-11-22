import React from "react";
import { test, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";
import NewsComponent from "../../components/NewsComponent";

const newsData = {
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
};

test("renders an h1", async () => {
  render(
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Provider store={store}>
        <NewsComponent data={newsData} />
      </Provider>
    </Router>,
  );
  const h1 = screen.getAllByRole(
    "link",
    "Before You Buy (or Build On) a Humanoid Robot: A Developer's Evaluation Checklist",
  );
  expect(h1.length).toBe(1);
});
