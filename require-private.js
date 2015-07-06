var path = require('path');

function requirePrivate(moduleName) {
  var modulePath = path.join(
    path.dirname(module.parent.filename),
    moduleName
  );

  return require(modulePath);
}

module.exports = requirePrivate;