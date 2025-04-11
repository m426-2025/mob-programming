export function sumSquareOfOddNumbers(xs: number[]): number {
    return xs
    .filter((x) => x % 2 == 1)
    .map((x) => x ** 2)
    .reduce((acc, x) => acc + x, 0);
}

export function mutliplyIncrementOfEvenNumbers(xs: number[]): number {
    if (xs.length == 0) {
        return 0;
    }
    let j = xs[0];
    for (let x of xs) {
        if (x % 2 == 0) {
            j *= (x + 1);
        }
    }
    return j;
}
