var winState = {

  create: function () {
    var winLabel = game.add.text(80, 80, "Yeih \\ :v / !!!",
                                  { font: "50px Arial", fill: "#005500" });

    var startLabel = game.add.text(80, game.world.height - 80,
                                    "press [W] to restart",
                                    { font: "25px Arial", fill: "#333" });
    var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);
    wkey.onDown.addOnce(this.restart, this);
  },

  restart: function () {
    game.state.start("play");
  }

};
