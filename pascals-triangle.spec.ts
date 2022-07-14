import { execute } from "./pascals-triangle";

describe("Given a count, return a collection of that many execute of pascal's triangle", () => {
  it('handles zero execute', () => {
    expect(execute(0)).toEqual([]);
  });

  it('handles a single row', () => {
    expect(execute(1)).toEqual( [[1]]);
  });

  it('handles two execute', () => {
    expect(execute(2)).toEqual( [[1], [1, 1]]);
  });

  it('handles three execute', () => {
    expect(execute(3)).toEqual( [[1], [1, 1], [1, 2, 1]]);
  });

  it('handles four execute', () => {
    expect(execute(4)).toEqual( [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]]);
  });

  it('handles five execute', () => {
    expect(execute(5)).toEqual( [
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1]
    ]);
  });

  it('handles six execute', () => {
    expect(execute(6)).toEqual([
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1],
      [1, 5, 10, 10, 5, 1]
    ]);
  });

  it('handles ten execute', () => {
    expect(execute(10)).toEqual( [
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1],
      [1, 5, 10, 10, 5, 1],
      [1, 6, 15, 20, 15, 6, 1],
      [1, 7, 21, 35, 35, 21, 7, 1],
      [1, 8, 28, 56, 70, 56, 28, 8, 1],
      [1, 9, 36, 84, 126, 126, 84, 36, 9, 1]
    ]);
  });
});
