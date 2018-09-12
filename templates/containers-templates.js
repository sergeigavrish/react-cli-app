const container = {

  "jsx": (name) => 
`import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'

export default ${name}Container extends PureComponent {
  
  state = {

  }

  componentDidMount() {
    
  }
  
  render {
    return ()
  }

}

${name}Container.propTypes = {
  
}
`,
  "index": (name) => 
`export default from './${name}.jsx';
`
}

module.exports = {
  container
}
