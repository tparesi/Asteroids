;(function() {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Asteroid = Asteroids.Asteroid = function (args) {
    args.color = Asteroid.COLOR;
    args.radius = Asteroid.RADIUS;
    args.vel = Asteroids.Util.randVec();
    Asteroids.MovingObject.call(this, args);
  };
  Asteroid.COLOR = "#000";
  Asteroid.RADIUS = 25;


  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

})();
