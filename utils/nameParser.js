module.exports = (str) => {
  return str
    .split(/-|_/)
    .map( (el, index) => {
      if(!index) return el[0].toLowerCase() + el.slice(1);
      if(index) {
        return el[0].toUpperCase() + el.slice(1);
      }
      return el;
    })
    .join('');
}
