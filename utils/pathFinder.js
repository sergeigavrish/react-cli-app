const fs = require('fs');
const path = require('path');

module.exports = () => {
    let currentPath = path.resolve(); 
    for (let i = 0; i < 3; i++) {
      let files = fs.readdirSync(currentPath);
      if (files.some(file => file === 'package.json')) {
        break
      } else {
        if(i !== 2) {
          currentPath = path.resolve(`${currentPath}/..`);
        }
      }
    }
    if (!fs.readdirSync(currentPath).some(file => file === 'package.json')) {
      console.log(`
    You can run the 'react g' command in the project's folder
    with 'package.json' or up to 3 folders deep from the root folder`);

      require('../cmds/help')([]);
    }

    return currentPath;
}
