const fs = require('fs');

const { mkdirSync } = require('../../utils/mkdirSync');

module.exports = (args) => {

  mkdirSync('./components');

  console.log('component',args);
  
}
