;( function() {
  if (typeof window.Asteroids === 'undefined') {
    window.Asteroids = {};
  }

  var Bullet = Asteroids.Bullet = function (args) {
    args.color = Bullet.COLOR;
    args.radius = Bullet.RADIUS;
    Asteroids.MovingObject.call(this, args);
  }
  Bullet.COLOR = "#FF0000";
  Bullet.RADIUS = 2;

  Asteroids.Util.inherits(Bullet, Asteroids.MovingObject);

})();
