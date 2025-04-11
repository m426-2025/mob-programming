export function sumSquareOfOddNumbers(xs: number[]): number {
  return xs
    .filter((x) => x % 2 == 1)
    .map((x) => x ** 2)
    .reduce((acc, x) => acc + x);
}

export function mutliplyIncrementOfEvenNumbers(xs: number[]): number {
    let acc = 1;
    for (const x of xs) {
        if (x % 2 === 0) {
            acc *= (x + 1);
        }
    }
    return acc;
}
