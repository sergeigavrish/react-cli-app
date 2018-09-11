module.exports = {
  camelCase: (str) => {
    return str
    .split(/-|_/)
    .map( (el, index) => {
      el = el.toLowerCase()
      if(index) {
        return el[0].toUpperCase() + el.slice(1);
      }
      return el;
    })
    .join('');
  },
  pascalCase: (str) => {
    return str
    .split(/-|_/)
    .map( el => {
      return el[0].toUpperCase() + el.slice(1);
    })
    .join('');
  }
}
