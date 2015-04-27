;(function() {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Asteroid = Asteroids.Asteroid = function (args) {
    MovingObject.call(this, args);
    this.vel = Asteroids.Util.randVec();
  };
  Asteroid.COLOR = #fff;
  Asteroid.RADIUS = 5;


  Asteroids.Util.inherit(Asteroid, MovingObject);

})();
