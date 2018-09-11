module.exports = (args) => {

  const command = args[1]
    ? args[1] === 'h'
    ? 'help'
    : args[1] === 'component'
    || args[1] === 'com'
    ? 'component'
    : args[1] === 'container'
    || args[1] === 'con'
    ? 'container'
    : args[1]
    : 'help';

  switch (command) {
    case 'help': {
      require('./help')(args);
      break
    }
    case 'component': {
      require('./generate/component')(args);
      break
    }
    case 'container': {
      require('./generate/container')(args);
      break
    }
    default:
      console.error(`"${args[0]} ${command}" is not a valid command!`);
      require('./help')(args);
      break
  }
  
}
