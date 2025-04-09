import { bar } from "./foo";

test("returns number", () => {
  expect(bar()).toBe(42);
});
