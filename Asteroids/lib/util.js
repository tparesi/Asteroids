;(function() {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Util = Asteroids.Util = {};
  Util.inherits = function (ChildClass, ParentClass) {
    var Surrogate = function () {};
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
  };

  Util.randVec = function () {
    var rand = Math.random;
    var vel = [rand() * 10 - 5, rand() * 10 - 5];
    if ((vel[0] < 1 && vel[0] > -1) || (vel[1] < 1 && vel[1] > -1)) {
      vel = Util.randVec();
    }

    return vel;
  };



})();
