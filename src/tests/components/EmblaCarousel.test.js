import React from "react";
import { expect, jest, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import EmblaCarousel from "../../components/embla/EmblaCarousel";
import humanoidData from "../../data/data.json";

jest.mock("embla-carousel-react", () => {
  return () => [null];
});

test("renders an h1", async () => {
  const OPTIONS = { axis: "y" };
  const SLIDES = humanoidData[0].image;
  render(<EmblaCarousel slides={SLIDES} options={OPTIONS} color="#4C2365" />);
  const img = screen.getAllByRole("img");
  expect(img.length).toBe(9);
});
