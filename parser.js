var espree = require("espree");

function parseForESLint(code, options) {
  console.log('parseForESLint', code);
  return {
    // ast: espree.parse(code, options),
    ast: {
      // ast is JS ast. We don't have JS, so this AST is for empty JS file
      type: 'Program',
      start: 0,
      end: 0,
      loc: { start: { line: 1, column: 0 }, end: { line: 1, column: 0 } },
      range: [0, 0],
      body: [],
      tokens: [],
      comments: [],
      // Used only by eslint-plugin-markdown-language
      mdCode: code,
    },
    services: {
      isPlain: true,
      foo: function() {
        console.log("foo");
      }
    },
    scopeManager: null,
    visitorKeys: null
  };
};

module.exports = { parseForESLint };