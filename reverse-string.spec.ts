import { execute } from "./reverse-string";

describe('ReverseString', () => {
  it('handles empty string', () => {
    const expected = '';
    const actual = execute('');
    expect(actual).toEqual(expected);
  });

  it('reverses a single word', () => {
    const expected = 'tobor';
    const actual = execute('robot');
    expect(actual).toEqual(expected);
  });

  it('reverses a capitalized word', () => {
    const expected = 'nemaR';
    const actual = execute('Ramen');
    expect(actual).toEqual(expected);
  });

  it('reverses a sentence with punctuation', () => {
    const expected = '!yrgnuh ma I';
    const actual = execute('I am hungry!');
    expect(actual).toEqual(expected);
  });

  it('reverses a palindrome', () => {
    const expected = 'racecar';
    const actual = execute('racecar');
    expect(actual).toEqual(expected);

  });

  it('reverses an even-sized word', () => {
    const expected = 'reward';
    const actual = execute('drawer');
    expect(actual).toEqual(expected);
  });
});