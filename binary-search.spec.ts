import { execute } from './binary-search';

describe('Binary search', () => {
  it('handles empty aray', () => {
    const expected: number = -1;
    const actual = execute([], 5);
    expect(actual).toEqual(expected);
  });

  it('not found item in first position', () => {
    const expected = -1;
    const actual = execute(
      [
        1, 6, 8, 10, 15, 18, 22, 34, 39, 40, 47, 50, 73, 80, 122, 158, 189, 250,
        555, 1039,
      ],
      -25,
    );
    expect(actual).toEqual(expected);
  });

  it('not found item in last position', () => {
    const expected = -1;
    const actual = execute(
      [
        1, 6, 8, 10, 15, 18, 22, 34, 39, 40, 47, 50, 73, 80, 122, 158, 189, 250,
        555, 1039,
      ],
      2000,
    );
    expect(actual).toEqual(expected);
  });

  it('not found item in the middle', () => {
    const expected = -1;
    const actual = execute(
      [
        1, 6, 8, 10, 15, 18, 22, 34, 39, 40, 47, 50, 73, 80, 122, 158, 189, 250,
        555, 1039,
      ],
      41,
    );
    expect(actual).toEqual(expected);
  });

  it('item found in the middle', () => {
    const expected = 11;
    const actual = execute(
      [
        1, 6, 8, 10, 15, 18, 22, 34, 39, 40, 47, 50, 73, 80, 122, 158, 189, 250,
        555, 1039,
      ],
      50,
    );
    expect(actual).toEqual(expected);
  });

  it('item found at the beginning', () => {
    const expected = 0;
    const actual = execute(
      [
        1, 6, 8, 10, 15, 18, 22, 34, 39, 40, 47, 50, 73, 80, 122, 158, 189, 250,
        555, 1039,
      ],
      1,
    );
    expect(actual).toEqual(expected);
  });

  it('item found at the end', () => {
    const expected = 19;
    const actual = execute(
      [
        1, 6, 8, 10, 15, 18, 22, 34, 39, 40, 47, 50, 73, 80, 122, 158, 189, 250,
        555, 1039,
      ],
      1039,
    );
    expect(actual).toEqual(expected);
  });

  it('item not found item in a strings array', () => {
    const expected = -1;
    const actual = execute(
      [
        'arm',
        'armchair',
        'bolt',
        'chair',
        'cherry',
        'chocolate',
        'cream',
        'head',
        'leg',
        'shoulder',
      ],
      'armpit',
    );
    expect(actual).toEqual(expected);
  });

  it('item found item in a strings array', () => {
    const expected = 7;
    const actual = execute(
      [
        'arm',
        'armchair',
        'bolt',
        'chair',
        'cherry',
        'chocolate',
        'cream',
        'head',
        'leg',
        'shoulder',
      ],
      'head',
    );
    expect(actual).toEqual(expected);
  });
});
