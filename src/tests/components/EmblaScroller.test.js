import React from "react";
import { expect, jest, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import EmblaScroller from "../../components/embla/EmblaScroller";

jest.mock("embla-carousel-react", () => {
  return () => [null];
});

test("renders buttons and text", async () => {
  const OPTIONS = { axis: "y" };
  const SLIDES = [
    "Consumer use in households.",
    "Tasks such as laundry, dishes, tidying, and fetching.",
    "Environments requiring stair climbing and fall recovery.",
    "Operations requiring a rated payload of 24.948 kg or lifting 69.853 kg.",
  ];
  render(<EmblaScroller slides={SLIDES} options={OPTIONS} />);
  const button = screen.getAllByRole("button");
  expect(button.length).toBe(2);

  const p = screen.getAllByText(SLIDES[0]);
  expect(p[0]).toHaveTextContent(SLIDES[0]);

  const p2 = screen.getAllByRole("paragraph");
  expect(p2.length).toBe(4);
});
