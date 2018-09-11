const container = {

  "jsx": (name) => 
  `import React, { PureComponent } from 'react';
  import PropTypes from 'prop-types'
  
  export default ${name}Container extends PureComponent {
    
    this.state = {

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
  `import ${name} from './';
  export default;`
}

module.exports = {
  container
}
