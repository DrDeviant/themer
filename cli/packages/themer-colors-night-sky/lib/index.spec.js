const { colors } = require('./index');

describe('themer-colors-night-sky', () => {

  it('should contain a dark theme', () => {
    expect(colors.dark).toBeDefined();
  });

  it('should define all required colors', () => {
    const prefixes = [
      'accent0',
      'accent1',
      'accent2',
      'accent3',
      'accent4',
      'accent5',
      'accent6',
      'accent7',
      'shade0',
      'shade7',
    ];
    prefixes.forEach(prefix => {
      expect(colors.dark[prefix]).toBeDefined();
    });
  });

});
