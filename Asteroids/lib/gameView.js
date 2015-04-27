;(function() {
  if (typeof window.Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var GameView = Asteroids.GameView = function (Game, ctx) {
    this.Game = Game;
    this.ctx = ctx;
  };

  GameView.prototype.start = function () {
    setInterval(function(){
      Game.moveObjects();
      Game.draw();
    }, 20);
  };

  



})();
