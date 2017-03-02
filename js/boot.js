var bootState = {

  create: function () {
    game.physics.startSystem(Phaser.Physics.ARCADE);

    game.stage.backgroundColor = "#f9f9f9";

    game.state.start("load");
  }
  
};
