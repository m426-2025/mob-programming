export function sumSquareOfOddNumbers(xs: number[]): number {
  return xs
    .filter((x) => x % 2 == 1)
    .map((x) => x ** 2)
    .reduce((acc, x) => acc + x, 0);
}

export function mutliplyIncrementOfEvenNumbers(xs: number[]): number {
  let i = 1;
  for (const num of xs) {
    if (num % 2 == 0) {
      i *= (num + 1);
    }
  }
  return i;
}
