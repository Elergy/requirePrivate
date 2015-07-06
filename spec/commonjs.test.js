var requirePrivate = require('./../require-private.js');
var importedFunction = requirePrivate('./resources/commonjs/use-module.js');
var importedObject = requirePrivate('./resources/commonjs/use-exports.js');

describe('CommonJS', function() {
  it('importedFunction should be a function', function() {
    expect(importedFunction).toBeDefined();
    expect(typeof importedFunction).toBe('function');
  });

  it('importedObject should be an object and should have a function', function() {
    expect(importedObject).toBeDefined();
    expect(typeof importedObject).toBe('object');
    expect(typeof importedObject.func).toBe('function');
  });
});