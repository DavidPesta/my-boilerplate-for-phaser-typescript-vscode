class Barrel extends Phaser.Sprite {
	static loadAssets(game:Phaser.Game) {
		let assetPath = "game/GameScene/Barrel";
		game.load.image("barrelImage", assetPath + "/barrel.png");
	}
	
	setup(x:number, y:number, barrelSpeed:number) {
		this.loadTexture("barrelImage");
		
		this.game.physics.arcade.enable(this);
		this.body.collideWorldBounds = true;
		this.body.bounce.set(1, 0);
		this.reset(x, y);
		this.body.velocity.x = barrelSpeed;
	}
}
