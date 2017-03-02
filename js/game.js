var game = new Phaser.Game(800, 600, Phaser.AUTO, "gameDiv"); // 16x12

game.state.add("boot", bootState);
game.state.add("load", loadState);
game.state.add("menu", menuState);
game.state.add("play", playState);
game.state.add("win", winState);
game.state.add("lose", loseState);

game.state.start("boot");
