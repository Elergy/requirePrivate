var requirePrivate = require('./../require-private.js');
var importedFunction = requirePrivate('./resources/commonjs/use-module.js');
var importedObject = requirePrivate('./resources/commonjs/use-exports.js');

describe('CommonJS', function() {
  it('importedFunction should be a function', function() {
    expect(importedFunction).toBeDefined();
    expect(typeof importedFunction).toBe('function');
  });

  it('importedFunction should work properly', function() {
    expect(importedFunction()).toBe(15);
  });

  it('importedObject should be an object and should have a function', function() {
    expect(importedObject).toBeDefined();
    expect(typeof importedObject).toBe('object');
    expect(typeof importedObject.func).toBe('function');
  });

  it('importedObject.func should work properly', function() {
    expect(importedObject.func()).toBe(15);
  });

  it('importedFunction should have _private property', function() {
    expect(importedFunction._private).toBeDefined();
  });

  it('importedObject should have _private property', function() {
    expect(importedObject._private).toBeDefined();
  });

  it('importedFunction._private should contain private fields', function() {
    expect(Object.keys(importedFunction._private).length).toBe(4);
    expect(importedFunction._private.privateObject).toBeDefined();
    expect(importedFunction._private.privateObject.privateField).toBe(1);
    expect(importedFunction._private.privatePrimitive).toBe(1);
    expect(importedFunction._private.privateFunction()).toBe(15);
    expect(importedFunction._private.publicWrapper()).toBe(15);
  });

  it('importedObject._private should contain private fields', function() {
    expect(Object.keys(importedObject._private).length).toBe(4);
    expect(importedObject._private.privateObject).toBeDefined();
    expect(importedObject._private.privateObject.privateField).toBe(1);
    expect(importedObject._private.privatePrimitive).toBe(1);
    expect(importedObject._private.privateFunction()).toBe(15);
    expect(importedObject._private.publicWrapper()).toBe(15);
  });
});