const { Selector } = require(`./selector`);

const selectService = (name, args) => {
  return Selector()[name].run(args);
};

module.exports = {
  selectService,
};
