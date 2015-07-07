var path = require('path');
var hook = require('istanbul').hook;

function match() {
  return true;
}

function transform(code) {
  code = code + '\n' +
    'module.exports._private = {}';

  return code;
}

function requirePrivate(moduleName) {
  var modulePath = path.resolve(
    path.dirname(module.parent.filename),
    moduleName
  );

  hook.hookRequire(match, transform);

  var requiredModule = require(modulePath);

  hook.unhookRequire();

  return requiredModule;
}

module.exports = requirePrivate;