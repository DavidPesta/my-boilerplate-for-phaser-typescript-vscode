class GameScene extends Phaser.State {
	static loadAssets(game:Phaser.Game) {
		let assetPath = "game/GameScene";
		game.load.image("imageImage", assetPath + "/image.png");
	}
	
	create() {
		let image = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, "imageImage");
		image.anchor.setTo(0.5, 0.5);
	}
}
