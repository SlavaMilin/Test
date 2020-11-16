const { promisify } = require("util");
const {resolve, join} = require("path")

const glob = promisify(require('glob'));

findFolders = async () => {
  const pattern = join(__dirname, '..', '*/');
  const folders = await glob(pattern, {ignore: ['**/src/**', '**/node_modules/**']});
  console.log('Pattern: ', pattern);
  console.log('Результат: ', folders);
  return folders;
}

module.exports = {findFolders};