class BarrelGroup extends Phaser.Group {
	gameScene:GameScene;
	
	constructor(gameScene:GameScene) {
		super(gameScene.game);
		this.gameScene = gameScene;
	}
	
	createBarrel(x:number, y:number, barrelSpeed:number):Barrel {
		let barrel:Barrel = this.getFirstExists(false);
		if (!barrel) {
			barrel = new Barrel(this.game);
			this.add(barrel);
		}
		
		barrel.setup(this.gameScene, x, y, barrelSpeed);
		
		return barrel;
	}
	
	update() {
		if (this.gameScene.gameLive) {
			this.game.physics.arcade.collide(this, this.gameScene.ground);
			this.game.physics.arcade.collide(this, this.gameScene.platforms);
		}
		
		this.forEachExists((barrel:Barrel) => {
			barrel.update();
		}, this);
	}
}
