class Fire extends Phaser.Sprite {
	static loadAssets(game:Phaser.Game) {
		let assetPath = "game/GameScene/Fire";
		game.load.spritesheet("fireSheet", assetPath + "/fire_spritesheet.png", 20, 21, 2, 1, 1);
	}
	
	setup(x:number, y:number) {
		this.loadTexture("fireSheet");
		this.animations.add("flickerAnimation", [0, 1], 4, true);
		this.play("flickerAnimation");
		
		this.x = x;
		this.y = y;
		
		this.game.physics.arcade.enable(this);
		this.body.allowGravity = false;
		this.body.immovable = true;
	}
}
