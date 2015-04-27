;(function() {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var GameView = Asteroids.GameView = function (game, ctx) {
    this.game = game;
    this.ctx = ctx;
  };

  GameView.prototype.start = function (canvasEl) {
    var ctx = canvasEl.getContext("2d");
    this.bindKeyHandlers();
    setInterval(function () {
      this.game.step();
      this.game.draw(ctx);
    }.bind(this), 20);
  };

  GameView.prototype.bindKeyHandlers = function () {
    key('up', this.game.ship.power.bind(this.game.ship, [0,-1]));
    key('right', this.game.ship.power.bind(this.game.ship, [1,0]));
    key('down', this.game.ship.power.bind(this.game.ship, [0,1]));
    key('left', this.game.ship.power.bind(this.game.ship, [-1,0]));
  }




})();
