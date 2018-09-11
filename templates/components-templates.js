const container = {

  "jsx": (name) => 
  `import React, { Component } from 'react';
  import PropTypes from 'prop-types'
  
  export default ${name}Container extends Component {
    
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
  "css": () => 
  `
  `,
  "spec": (name) => 
  `import React from 'react';
  import ${name} from './${name}';
  
  describe('${name}', () => {
  
      let container;
  
      beforeEach(() => {
          container = shallow(<${name}/>);
      });
  
      it('render component', () => {
          expect(container.length).toEqual(1);
      });
      
  });
  `,
  "index": (name) => 
  `import ${name} from './';
  export default;`
}

module.exports = {
  container
}
