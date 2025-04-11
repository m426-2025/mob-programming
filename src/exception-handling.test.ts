import { fail } from "./exception-handling";

test("test fail", () => {
  expect(() => fail("Joe")).toThrow("Joe is a complete failure.");
});
