class Preloader extends Phaser.State {
	preload() {
		this.game.load.image("image", "game/GameScene/image.png");
	}
	
	create() {
		this.game.state.start("Home");
	}
}
