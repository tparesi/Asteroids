;(function () {
  if (typeof window.Asteroids === 'undefined') {
    window.Asteroids = {};
  }

  var Game = Asteroids.Game = function () {
    this.asteroids = [];
    this.addAsteroids();
  };
  Game.DIM_X = 500;
  Game.DIM_Y = 500;
  Game.NUM_ASTEROIDS = 5;

  Game.prototype.randomPosition = function () {
    var x = Math.random() * Game.DIM_X;
    var y = Math.random() * Game.DIM_Y;

    return [x, y];
  };

  Game.prototype.addAsteroids = function () {
    for (var i = 0; i < Game.NUM_ASTEROIDS; i++) {
      this.asteroids.push(new Asteroids.Asteroid({
        pos: this.randomPosition(),
        game: this
      }));
    }
  };

  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);

    this.asteroids.forEach(function (asteroid) {
      asteroid.draw(ctx);
    });
  };

  Game.prototype.moveObjects = function () {
    this.asteroids.forEach(function (asteroid) {
      asteroid.move();
    });
  };

  Game.prototype.wrap = function (pos) {
    if (pos[0] >= Game.DIM_X + 10) {
      pos[0] = 0;
    } else if (pos[0] <= -10) {
      pos[0] = Game.DIM_X;
    } else if (pos[1] >= Game.DIM_Y + 10) {
      pos[1] = 0;
    } else if (pos[1] <= -10) {
      pos[1] = Game.DIM_Y;
    }
  };

  Game.prototype.checkCollisions = function() {
    for (var i = 0; i < this.asteroids.length; i++) {
      for (var j = i + 1; j < this.asteroids.length; j++) {
        if (this.asteroids[i].isCollidedWith(this.asteroids[j])) {
          this.remove(this.asteroids[j]);
          this.remove(this.asteroids[i]);

        }
      }
    }
  };

  Game.prototype.step = function () {
    this.moveObjects();
    this.checkCollisions();
  };

  Game.prototype.remove = function (asteroid) {
    this.asteroids = this.asteroids.filter(function (el) {
      return asteroid !== el;
    })
  };

})();
