export function fail(who: string) {
  throw new Error(`${who} is a complete failure.`);
}
