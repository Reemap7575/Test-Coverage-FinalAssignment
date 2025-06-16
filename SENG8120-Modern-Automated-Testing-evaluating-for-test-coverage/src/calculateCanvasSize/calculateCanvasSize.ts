
export function calculateCanvasSize(width: number, height: number): number {
  if (width <= 0 || height <= 0) throw new Error("Invalid dimensions");
  return width * height;
}
