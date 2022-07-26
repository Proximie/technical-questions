import { execute } from './flatten-array';

describe('Flatten array', () => {
  it('handles empty aray', () => {
    const expected: string | number[] = [];
    const actual = execute([]);
    expect(actual).toEqual(expected);
  });

  it('flatten an integer array with one nested array', () => {
    const expected = [1, 6, 54, 8, 22, 14];
    const actual = execute([1, [6, 54], 8, [22, 14]]);
    expect(actual).toEqual(expected);
  });

  it('flatten an integer array with falsy values', () => {
    const expected = [23, 15, 34];
    const actual = execute([23, 15, null, 34, 0, undefined]);
    expect(actual).toEqual(expected);
  });

  it('flatten an integer array with several levels of nested arrays', () => {
    const expected = [1, 6, 54, 22, 14, 3, 4, 6, 9];
    const actual = execute([
      1,
      [6, 54],
      [[[22, 14]]],
      [3, undefined, [4, [6, 9]]],
      [[undefined]],
    ]);
    expect(actual).toEqual(expected);
  });

  it('flatten an string array with several levels of nested arrays and falsy values', () => {
    const expected = [
      'apple',
      'orange',
      'banana',
      'pear',
      'strawberry',
      'lemon',
      'mandarin',
      'grapes',
      'mango',
    ];
    const actual = execute([
      'apple',
      [['orange', 'banana']],
      [[['pear', 'strawberry', '']]],
      ['lemon', undefined, ['mandarin', ['grapes', 'mango']]],
      [[undefined]],
    ]);
  });
});
