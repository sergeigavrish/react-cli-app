const menu = {
  main: `
    react [command] <options>

    generate [g] .......... generate template
    help     [h] .......... show help menu for a command
  `,
  generate: `
    react generate [g] <options>

    component  [comp] .......... create react component
    container [cont] .......... create react container

    print name in plain camelCase or use - or _
  `,
}

module.exports = {
  menu
}
