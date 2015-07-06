var privateObject = {
  privateField: 1
};

var privatePrimitive = 14;

function privateFunction() {
  return privateObject.privateField + privatePrimitive;
}

function publicWrapper() {
  return privateFunction();
}

exports.func = publicWrapper;