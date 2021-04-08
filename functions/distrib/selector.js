"use strict";

const mailChecker = require("mail-checker"); //?

const Selector = () => {
  return {
    [mailChecker.name]: mailChecker,
  };
};

module.exports = {
  Selector,
};
