class Preloader extends Phaser.State {
	preload() {
		this.game.load.image('image', 'game/Scene/image.png');
	}

	create() {
		this.game.state.start('Scene');
	}
}
