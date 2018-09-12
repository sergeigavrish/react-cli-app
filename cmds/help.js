const { menu } = require('../templates/menu');

module.exports = (args) => {
  const command = args[0] === 'generate'
    || args[0] === 'g' 
    ? 'generate' 
    : args[0];
  console.log(menu[command] || menu.main)
}
