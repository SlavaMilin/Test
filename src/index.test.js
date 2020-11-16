const { expect } = require('@jest/globals');
const {findFolders} = require('./index.js');

test('should find folders', async () => {
  const folders = await findFolders();
  expect(folders.length).toBe(2);
  expect(folders[0]).toContain('test-1');
  expect(folders[1]).toContain('test-2');
});