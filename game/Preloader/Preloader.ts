class Preloader extends Phaser.State {
	static loadAssets(game:Phaser.Game) {
		let assetPath = "game/Preloader";
		game.load.image("preloadBarImage", assetPath + "/bar.png");
	}
	
	preloadBar:Phaser.Sprite;
	
	preload() {
		Game.fadeIn(this.game);
		
		this.preloadBar = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, "preloadBarImage");
		this.preloadBar.anchor.setTo(0.5);
		this.load.setPreloadSprite(this.preloadBar);
		
		GameScene.loadAssets(this.game);
		Background.loadAssets(this.game);
	}
	
	create() {
		this.game.state.start("Home");
	}
}
