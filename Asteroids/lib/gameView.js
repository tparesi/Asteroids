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
    setInterval(function () {
      this.game.moveObjects();
      this.game.draw(ctx);
    }.bind(this), 20);
  };





})();
