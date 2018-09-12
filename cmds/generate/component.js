const fs = require('fs');

const mkdirSync = require('../../utils/mkdirSync');
const { component } = require('../../templates/components-templates');
const camelCase = require('../../utils/nameParser');
const pathFinder = require('../../utils/pathFinder');

module.exports = (args) => {

  const rootPath = pathFinder();
  
  const camelCaseName = args[2] ? camelCase(args[2]) : 'template';
  const pascalCaseName = camelCaseName.charAt(0).toUpperCase() + camelCaseName.slice(1);
  
  mkdirSync(`${rootPath}/components`);
  mkdirSync(`${rootPath}/components/${camelCaseName}Component`);

  const targetPath = `${rootPath}/components/${camelCaseName}Component`;

  fs.writeFile(`${targetPath}/${camelCaseName}Component.jsx`, component.jsx(pascalCaseName), () =>
    fs.writeFile(`${targetPath}/${camelCaseName}Component.css`, component.css(), () =>
      fs.writeFile(`${targetPath}/${camelCaseName}Component.spec.js`, component.spec(pascalCaseName), () =>
        fs.writeFile(`${targetPath}/index.js`, component.index(pascalCaseName), () =>
          console.log('done')))));
  
  

}
