
const utils = require('..');
const assert = require('assert')

assert.strictEqual(utils.link('abc'), 'Abc');

console.log(`\u001B[32m✓\u001B[39m Tests passed`);