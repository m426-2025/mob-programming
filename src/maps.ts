export function assignPoints(
  results: string[][],
  pointsByRank: Map<number, number>,
): Map<string, number> {
  let placements: Map<string, number> = new Map();
  for (let race of results) {
      for (let i = 0; i < race.length; i++) {
          let lastPoints: number = placements.get(race[i]) || 0;
          placements.set(race[i], (pointsByRank.get(i + 1) || 0) + lastPoints);
      }
  }
  return placements;
}
