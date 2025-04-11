import { assignPoints } from "./maps";

test("Formula 1 Ranking", () => {
  // Arrange
  const points1991to2002: Map<number, number> = new Map([
    [1, 10],
    [2, 6],
    [3, 4],
    [4, 3],
    [5, 2],
    [6, 1],
  ]);
  const results: string[][] = [
    [
      "M. Schumacher",
      "R. Barrichello",
      "D. Coulthard",
      "M. Häkkinen",
      "A. Wurz",
      "J. Villeneuve",
    ],
    [
      "M. Schumacher",
      "M. Häkkinen",
      "R. Barrichello",
      "R. Schumacher",
      "A. Wurz",
      "D. Coulthard",
    ],
  ];
  const expected: Map<string, number> = new Map([
    ["M. Schumacher", 20],
    ["R. Barrichello", 10],
    ["M. Häkkinen", 9],
    ["D. Coulthard", 5],
    ["A. Wurz", 4],
    ["R. Schumacher", 3],
    ["J. Villeneuve", 1],
  ]);

  // Act
  const actual = assignPoints(results, points1991to2002);

  // Assert
  expect([...actual.entries()].sort()).toStrictEqual(
    [...expected.entries()].sort(),
  );
});
