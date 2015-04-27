Function.prototype.inherits = function(SuperClass) {
  var SubClass = this;
  var Surrogate = function () {};
  Surrogate.prototype = SuperClass.prototype;
  SubClass.prototype = new Surrogate();
};


function MovingObject () {};
MovingObject.prototype.move = function () {
  return "I moved!";
}

function Ship () {};
Ship.inherits(MovingObject);

function Asteroid () {};
Asteroid.inherits(MovingObject);
