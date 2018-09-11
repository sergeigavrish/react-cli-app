module.exports = () => {
  const [,,...args] = process.argv;
  let command = args[0] || 'help';
  if (command === 'h') {
    command = 'help';
  } 
  if (command === 'generate' || command === 'g') {
    command = 'generate';
  } 
  switch (command) {
    case 'help': {
      require('./cmds/help')(args);
      break
    }
    case 'generate': {
      require('./cmds/generate')(args);
      break
    }
    default:
      console.error(`"${command}" is not a valid command!`);
      require('./cmds/help')(args);
      break
  }
}