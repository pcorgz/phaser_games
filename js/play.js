var playState = {

  create: function () {
    this.keyboard = game.input.keyboard;

    this.player = game.add.sprite(50, 50, "player");
    game.physics.arcade.enable(this.player);
    this.player.body.setSize(42, 42, 4, 4);
    this.player.animations.add("walk", [0, 1, 0, 2], true);

    this.world = game.cache.getText("world").split("\n");

    this.walls = game.add.physicsGroup();
    this.roofs = game.add.physicsGroup();

    for (var i = 0; i < this.world.length; i++) {
      var row = this.world[i];
      for (var j = 0; j < row.length; j++) {
        if (row[j] === "X") {
          this.walls.create(j * 50, i * 50, "wall");
        }
        else if (row[j] === "O") {
          this.roofs.create(j * 50, i * 50, "wall");
        }
      }
    }

    game.physics.arcade.enable(this.walls);
    this.walls.setAll("body.immovable", true);

    game.physics.arcade.enable(this.roofs);
  },

  update: function () {

    if (this.player.body.y > game.world.height) {
      game.state.start("win");
    }

    game.physics.arcade.collide(this.player, this.walls);
    game.physics.arcade.overlap(this.player, this.roofs, this.roofOverlap);

    this.roofs.forEach( function (roof) {
      if (roof.lastOverlapped && game.time.now > roof.lastOverlapped) {
        var fadeinTween = game.add.tween(roof);
        fadeinTween.to({ alpha: 1 }, 50, Phaser.Easing.Linear.None, true);
        fadeinTween.start();
      }
    });

    this.player.body.velocity.x = 0;
    this.player.body.velocity.y = 0;

    // up + down
    if (this.keyboard.isDown(Phaser.Keyboard.W)) {
      this.player.body.velocity.y = -175;
    } else if (this.keyboard.isDown(Phaser.Keyboard.S)) {
      this.player.body.velocity.y = 175;
    }
    // left + right
    if (this.keyboard.isDown(Phaser.Keyboard.A)) {
      this.player.body.velocity.x = -175;
    } else if (this.keyboard.isDown(Phaser.Keyboard.D)) {
      this.player.body.velocity.x = 175;
    }

    if (this.player.body.velocity.x !== 0 ||
        this.player.body.velocity.y !== 0) {
      this.player.animations.play("walk", 8);
    } else {
      this.player.animations.stop("walk", true);
    }
  },

  roofOverlap: function (player, roof) {
    roof.lastOverlapped = game.time.now + 100;

    var fadeoutTween = game.add.tween(roof);
    fadeoutTween.to({ alpha: 0.4 }, 200, Phaser.Easing.Linear.None, true);
    fadeoutTween.start();
  }

};
