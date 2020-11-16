const globby = require("globby");
const {resolve, join} = require("path")

findFolders = async () => {
  const pattern = join(__dirname, '..', '*');
  const folders = await globby([pattern, '!**/src'], {onlyDirectories: true, gitignore: true});
  console.log('Pattern: ', pattern);
  console.log('Результат: ', folders);
  return folders;
}

module.exports = {findFolders};