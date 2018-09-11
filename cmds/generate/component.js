const fs = require('fs');

const { mkdirSync } = require('../../utils/mkdirSync');
const { template } = require('../../templates/containers-templates');
const { camelCase, pascalCase } = require('../../utils/nameParser');

module.exports = (args) => {

  mkdirSync('./components');
  const camelCaseName = args[2] ? camelCase(args[2]) : 'template';
  const pascalCaseName = args[2] ? pascalCase(args[2]) : 'Template';

  fs.writeFile(`${camelCaseName}Component.jsx`, template.jsx(pascalCaseName), () => console.log('done'));
  fs.writeFile(`${camelCaseName}Component.css`, template.css(), () => console.log('done'));
  fs.writeFile(`${camelCaseName}Component.spec.js`, template.spec(pascalCaseName), () => console.log('done'));
  fs.writeFile(`index.js`, template.index(pascalCaseName), () => console.log('done'));

}
