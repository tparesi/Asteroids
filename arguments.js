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

var curriedSum = function(numArgs) {
  var numbers = [];

  var _curriedSum = function(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      var accum = 0;
      for (var i = 0; i < numArgs; i++) {
        accum += numbers[i];
      }
      return accum;
    } else {
      return _curriedSum;
    }
  };

  return _curriedSum;
};

Function.prototype.curry = function (numArgs) {
  var args = [];
  var fn = this;

  var _curry = function (arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return fn.apply(fn, args);
    } else {
      return _curry;
    }
  };

  return _curry;
}


function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

sumThree(4, 20, 6); // == 30

// you'll write `Function#curry`!
var f1 = sumThree.curry(3);
var f2 = f1(4);
var f3 = f2(20);
var result = f3(6); // = 30

// or more briefly:
sumThree.curry(3)(4)(20)(6);
