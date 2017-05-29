import { capitalize } from './index';

test('capitalize method capitalizes the first letter of a string', () => {
  expect(capitalize('deftones')).toBe('Deftones');
});
