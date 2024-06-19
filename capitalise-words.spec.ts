import { execute } from "./reverse-string";

describe('CapitaliseWords', () => {
  it('handles empty string', () => {
    const expected = '';
    const actual = execute('');
    expect(actual).toEqual(expected);
  });

  it('capitalises a single word', () => {
    const expected = 'Robot';
    const actual = execute('robot');
    expect(actual).toEqual(expected);
  });

  it('capitalises a sentence', () => {
    const expected = 'I Am Hungry';
    const actual = execute('i am hungry');
    expect(actual).toEqual(expected);
  });

  it('capitalises a sentence with punctuation', () => {
    const expected = 'I Am Hungry!';
    const actual = execute('i am hungry!');
    expect(actual).toEqual(expected);
  });

  it('leaves the first letter of a word that is already capitalised', () => {
    const expected = 'Robot';
    const actual = execute('Robot');
    expect(actual).toEqual(expected);
  });

  it('capitalises a word with existing capital letters', () => {
    const expected = 'RameN';
    const actual = execute('rameN');
    expect(actual).toEqual(expected);
  });

  it('copes with multiple spaces between words', () => {
    const expected = 'I   Am    Hungry';
    const actual = execute('i   am    hungry');
    expect(actual).toEqual(expected);
  });

});