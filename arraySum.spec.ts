import { execute } from './arraySum';

describe('Array addition', () => {
  it('handles empty array', () => {
    const expected: number = 0;
    const actual = execute([]);
    expect(actual).toEqual(expected);
  });

  it('array with no numbers', () => {
    const expected = 0;
    const actual = execute(['a', { p: 3 }, null]);
    expect(actual).toEqual(expected);
  });

  it('flat array', () => {
    const expected = 79;
    const actual = execute([1, 5, 'b', 8, {}, 10, 15, 'a', 18, 22]);
    expect(actual).toEqual(expected);
  });
  it('handles negative numbers', () => {
    const expected = 59;
    const actual = execute([1, 5, 8, -10, 15, 18, 22, '215']);
    expect(actual).toEqual(expected);
  });

  it('nested arrays', () => {
    const expected = 74;
    const actual = execute([1, 'a', [6, 8, [10]], 15, [[[[18, 22]], -6]], '3']);
    expect(actual).toEqual(expected);
  });
});
