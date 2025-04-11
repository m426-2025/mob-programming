import { fail } from "./exception-handling";

test("test fail", () => {
  expect(() => fail("Joe")).toThrow("Joe is a complete failure.");
});

function expect(something) {
    return {
        toBe(what): {
            return something == what
        }
        toThrow(what): {
            try {
                something();
            } catch (somethingElse) {
                what == somethingElse
            }
        }
    };
}
