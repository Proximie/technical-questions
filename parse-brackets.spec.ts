import { execute } from "./parse-brackets";

describe('ParseBrackets', () => {
  it('passes an empty string', () => {
    const expected = true;
    const actual = execute('');
    expect(actual).toEqual(expected);
  });
  it('passes simple case', () => {
    const expected = true;
    const actual = execute('(a+b)');
    expect(actual).toEqual(expected);
  });
  it('fails on mismatched brackets', () => {
    const expected = false;
    const actual = execute('(a+b}');
    expect(actual).toEqual(expected);
  });
  it('fails on unbalanced brackets', () => {
    const expected = false;
    const actual = execute('((a+b)');
    expect(actual).toEqual(expected);
  });
  it('fails on mismatched brackets', () => {
    const expected = false;
    const actual = execute('({a+b)}');
    expect(actual).toEqual(expected);
  });
  it('passes a correct longer string', () => {
    const expected = true;
    const actual = execute('({a+b}, [c+d], {e, [f]})');
    expect(actual).toEqual(expected);
  });
  it('fails on an incorrect longer string', () => {
    const expected = false;
    const actual = execute('({a+b}, [c+d]), {e, [f]})');
    expect(actual).toEqual(expected);
  });

});