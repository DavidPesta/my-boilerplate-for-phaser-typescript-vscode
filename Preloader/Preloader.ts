class Preloader extends Phaser.State {
	preload() {
		this.game.load.image('image', 'Scene/image.png');
	}

	create() {
		this.game.state.start('Scene');
	}
}
