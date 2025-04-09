export function sumSquareOfOddNumbers(xs: number[]): number {
  return xs
    .filter((x) => x % 2 == 1)
    .map((x) => x ** 2)
    .reduce((acc, x) => acc + x);
}
