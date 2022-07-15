module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  endOfLine: 'lf',
  printWidth: 100,
  proseWrap: 'never',
  arrowParens: 'avoid',
  htmlWhitespaceSensitivity: 'ignore',
  overrides: [
    {
      files: '.prettierrc',
      options: {
        parser: 'json',
      },
    },
  ],
};
