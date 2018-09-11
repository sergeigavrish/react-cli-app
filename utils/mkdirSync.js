const fs = require('fs')
const path = require('path')

module.exports = {
  mkdirSync: (dirPath) => {
    try {
      fs.mkdirSync(path.resolve(dirPath))
    } catch (err) {
      if (err.code !== 'EEXIST') throw err
    }
  }
}

