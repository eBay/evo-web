export const range = (start: number, stop: number, step = 1): number[] =>
    Array(Math.ceil((stop + 1 - start) / step))
        .fill(start)
        .map((x, y) => x + y * step);
