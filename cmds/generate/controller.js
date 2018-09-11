const fs = require('fs');

const { mkdirSync } = require('../../utils/mkdirSync');

module.exports = (args) => {

  mkdirSync('./controllers');

  const name = args[2]
    ? args[2].split('').map( char => char === args[2][0] ? char.toUpperCase() : char).join('')
    : 'Template';
// TODO: camelCase function
  const camelCaseName =  args[2].split('').map( char => char === args[2][0] ? char.toUpperCase() : char).join('')
  
  const template = 

// TODO: move templates to consts

`import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'

export default ${name}Controller extends PureComponent {

  componentDidMount() {
    
  }
  
  render {
    return ()
  }

}

${name}Controller.PropTypes = {
  
}
`
  console.log('controller',args);
  fs.writeFile(`${args[2] ? args[2] : 'template'}-controller.js`, template, () => console.log('done'));

}
