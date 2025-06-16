
export function paintRequired(area: number, coveragePerLitre: number): number {
  if (area <= 0 || coveragePerLitre <= 0) throw new Error("Invalid input");
  return Math.ceil(area / coveragePerLitre);
}

