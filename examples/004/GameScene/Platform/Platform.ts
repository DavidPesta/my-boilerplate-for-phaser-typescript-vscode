class Platform extends Phaser.Sprite {
	static loadAssets(game:Phaser.Game) {
		let assetPath = "game/GameScene/Platform";
		game.load.image("platformImage", assetPath + "/platform.png");
	}
	
	setup(x:number, y:number) {
		this.loadTexture("platformImage");
		
		this.x = x;
		this.y = y;
		
		this.game.physics.arcade.enable(this);
		this.body.allowGravity = false;
		this.body.immovable = true;
	}
}
