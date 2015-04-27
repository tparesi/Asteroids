var sum = function () {

  var args = Array.prototype.slice.apply(arguments);
  var accum = 0;
  for (var i = 0; i < args.length; i++) {
    accum += args[i];
  }

  return accum;
};

Function.prototype.myBind = function (obj) {
  var fn = this;
  var args = Array.prototype.slice.apply(arguments).slice(1)
  return function () {
    return fn.apply(obj, args);
  };
};


var Cat = function (name) {
  this.name = name;
};

Cat.prototype.sayHi = function (owner) {
  console.log(this.name + " says hi to " + owner);
};

var Dog = function (name) {
  this.name = name;
};

var fluffy = new Dog('fluffy');

var hello = Cat.prototype.sayHi;

hello.myBind(fluffy, "Tom")();
