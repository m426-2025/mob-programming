export function sumSquareOfOddNumbers(xs: number[]): number {
  return xs
    .filter((x) => x % 2 == 1)
    .map((x) => x ** 2)
    .reduce((acc, x) => acc + x);
}

export function mutliplyIncrementOfEvenNumbers(xs: number[]): number {
  // TODO: implement using loops
  return 0;
}
