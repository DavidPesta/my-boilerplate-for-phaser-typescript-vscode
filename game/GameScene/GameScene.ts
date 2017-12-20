class GameScene extends Phaser.State {
	static loadAssets(game:Phaser.Game) {
		let assetPath = "game/GameScene";
		game.load.image("backgroundImage", assetPath + "/image.png");
	}
	
	backgroundImage:Phaser.Sprite;
	
	create() {
		Game.fadeIn(this.game, 100, () => {
			let rotateBackground:Phaser.Tween = this.game.add.tween(this.backgroundImage);
			rotateBackground.to({angle: "+360"}, 500);
			rotateBackground.start();
		}, this);
		
		this.backgroundImage = this.game.add.sprite(0, 0, "backgroundImage");
		this.backgroundImage.width = 1280;
		this.backgroundImage.height = 720;
		this.backgroundImage.x = this.backgroundImage.width / 2;
		this.backgroundImage.y = this.backgroundImage.height / 2;
		this.backgroundImage.anchor.setTo(0.5);
	}
}
