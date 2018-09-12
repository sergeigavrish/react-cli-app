const fs = require('fs');

const mkdirSync = require('../../utils/mkdirSync');
const { container } = require('../../templates/containers-templates');
const camelCase = require('../../utils/nameParser');
const pathFinder = require('../../utils/pathFinder');


module.exports = (args) => {
  const rootPath = pathFinder();
  
  const camelCaseName = args[2] ? camelCase(args[2]) : 'template';
  const pascalCaseName = camelCaseName.charAt(0).toUpperCase() + camelCaseName.slice(1);
  
  mkdirSync(`${rootPath}/containers`);
  mkdirSync(`${rootPath}/containers/${camelCaseName}Container`);

  const targetPath = `${rootPath}/containers/${camelCaseName}Container`;

  fs.writeFile(`${targetPath}/${camelCaseName}Container.jsx`, container.jsx(pascalCaseName), () =>
    fs.writeFile(`${targetPath}/index.js`, container.index(pascalCaseName), () => console.log('done')));
  
}
