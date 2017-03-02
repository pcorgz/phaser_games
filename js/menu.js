var menuState = {

  create: function () {
    var nameLabel = game.add.text(80, 80, "Laberinto :v",
                                  { font: "50px Arial", fill: "#333" });
    var startLabel = game.add.text(80, game.world.height - 80, 
                                    "press [W] to start",
                                    { font: "25px Arial", fill: "#222" });

    var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);
    wkey.onDown.addOnce(this.start, this);
  },

  start: function () {
    game.state.start("play");
  }

};
