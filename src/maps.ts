export function assignPoints(
    results: string[][],
    pointsByRank: Map<number, number>,
): Map<string, number> {
    let endResult: Map<string, number> = new Map();
    for (let drivers of results) {
        for (let i = 0; i < drivers.length; i++) {
            const driver = drivers[i];
            const previousResult = endResult.get(driver) || 0;
            endResult.set(driver, (pointsByRank.get(i + 1) || 0) + previousResult);
        }
    }
    return endResult;
}
