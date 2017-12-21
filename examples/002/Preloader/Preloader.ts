class Preloader extends Phaser.State {
	preload() {
		GameScene.loadAssets(this.game);
		Arrow.loadAssets(this.game);
		Animal.loadAssets(this.game);
	}
	
	create() {
		this.game.state.start("GameScene");
	}
}
