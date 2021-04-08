module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
  },
  parser: "babel-eslint",
};
