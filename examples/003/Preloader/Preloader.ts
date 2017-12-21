class Preloader extends Phaser.State {
	static loadAssets(game:Phaser.Game) {
		let assetPath = "game/Preloader";
		game.load.image("preloadBarImage", assetPath + "/bar.png");
		game.load.image("logoImage", assetPath + "/logo.png");
	}
	
	logo:Phaser.Sprite;
	preloadBar:Phaser.Sprite;
	
	preload() {
		this.logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, "logoImage");
		this.logo.anchor.setTo(0.5);
		
		this.preloadBar = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, "preloadBarImage");
		this.preloadBar.anchor.setTo(0.5);
		this.load.setPreloadSprite(this.preloadBar);
		
		Game.loadAssets(this.game);
		GameScene.loadAssets(this.game);
		DizzyButton.loadAssets(this.game);
		Pet.loadAssets(this.game);
	}
	
	create() {
		this.game.state.start("Home");
	}
}
