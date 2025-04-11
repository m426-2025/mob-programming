export function assignPoints(
  results: string[][],
  pointsByRank: Map<number, number>,
): Map<string, number> {
    const championship = new Map();
    for (const race of results) {
        for (let index = 0; index < race.length; index++) {
            const driver = race[index];
            const rank = index + 1;
            const points = pointsByRank.get(rank) || 0;
            const currentPoints = championship.get(driver) || 0;
            championship.set(driver, points + currentPoints);
        }
    }
  return championship;
}
