const test = require('node:test');
const assert = require('node:assert');
const { greet, add } = require('./app');

test('greet returns welcome message', () => {
  assert.strictEqual(greet('Chaitanya'), 'Hello Chaitanya, welcome to the Jenkins CI/CD pipeline demo!');
});

test('add adds two numbers', () => {
  assert.strictEqual(add(2, 3), 5);
});
