/**
 * @jest-environment jsdom
 */
import {
  colorPicker,
  filterByEitherProperty,
  removeDuplicatesByProperty,
} from "../utils";
import data from "../data/data.json";

const testArray = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
  { id: 3, name: "Alice", email: "alice2@example.com" },
  { id: 4, name: "Charlie", email: "bob@example.com" },
  { id: 5, name: "David", email: "david@example.com" },
];

test("Find color", () => {
  expect(colorPicker("consumer")).toBe("#4C2365");
  expect(colorPicker("professional")).toBe("#2E7D32");
  expect(colorPicker("research")).toBe("#E85D75");
  expect(colorPicker("education")).toBe("#F5B52E");
});

test("Filter data by two properties", () => {
  const testResultArray = filterByEitherProperty(
    data,
    "name",
    "useType",
    "consumer",
  );
  expect(testResultArray.length).toBe(2);
});

test("remove duplicates by property", () => {
  const data = removeDuplicatesByProperty(testArray, "name");
  expect(data.length).toBe(testArray.length - 1);
});
