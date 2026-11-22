import { render, screen } from "@testing-library/react";
import Videos from "../../components/Videos";

test("render videos", () => {
  render(
    <Videos
      video_id={[
        "uVcBa6NXAbk",
        "LTYMWadOW7c",
        "j31dmodZ-5c",
        "f3c4mQty_so",
        "NIHU7Y8-8k4",
      ]}
      color="#4C2365"
      theme={{
        background: "#1F2937",
        text: "#d9d9d9",
      }}
    />,
  );
  const text = screen.getAllByRole("button", "1x NEO");
  expect(text.length).toBe(5);
});
