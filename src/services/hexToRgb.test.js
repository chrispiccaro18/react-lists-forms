import hexToRgb from './hexToRgb';

describe('convert hex to rgb', () => {
  it('takes a hex and outputs a rgb obj', () => {
    const hex = '#FFFF00';
    const result = hexToRgb(hex);
    const expected = { red: 255, green: 255, blue: 0 };
    expect(result).toEqual(expected);
  });
});
