var loadState = {

  preload: function () {
    var loadingLabel = game.add.text(80, 150, "loading...",
                                      { font: "30px Courier", fill: "#fff" });

    this.version = "0.0.0.2";
    game.load.spritesheet("player", "assets/player.png?v=" + this.version,
                          50, 50);
    game.load.image("wall", "assets/brickwall.png?v=" + this.version);

    game.load.text("world", "assets/world.txt?v=" + this.version);
  },

  create: function () {
    game.state.start("menu");
  }

};
