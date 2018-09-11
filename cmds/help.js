const menus = {
  main: `
    react [command] <options>

    generate [g] .......... generate template
    help     [h] .......... show help menu for a command
  `,
  generate: `
    react generate [g] <options>

    component  [com] .......... create react component
    controller [con] .......... create react controller
  `,
}

module.exports = (args) => {

  const command = args[0] === 'generate'
    || args[0] === 'g' 
    ? 'generate' 
    : args[0];
  console.log(menus[command] || menus.main)

}
