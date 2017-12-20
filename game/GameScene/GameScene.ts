class GameScene extends Phaser.State {
	static loadAssets(game:Phaser.Game) {
		let assetPath = "game/GameScene";
		game.load.image("backgroundImage", assetPath + "/image.png");
	}
	
	backgroundImage:Phaser.Sprite;
	
	create() {
		this.backgroundImage = this.game.add.sprite(0, 0, "backgroundImage");
		this.backgroundImage.width = 1280;
		this.backgroundImage.height = 720;
	}
}
