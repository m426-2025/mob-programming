import {
  mutliplyIncrementOfEvenNumbers,
  sumSquareOfOddNumbers,
} from "./filter-map-reduce-loops";

test("sum square of odd numbers", () => {
  // Arrange
  const xs: number[] = [1, 2, 3, 4, 5];
  const expected: number = 1 + 9 + 25;

  // Act
  const actual = sumSquareOfOddNumbers(xs);

  // Assert
  expect(actual).toBe(expected);
});

test("multiply increment of even numbers", () => {
  // Arrange
  const xs: number[] = [1, 2, 3, 4, 5];
  const expected: number = 4 * 16;

  // Act
  const actual = mutliplyIncrementOfEvenNumbers(xs);

  // Assert
  expect(actual).toBe(expected);
});
