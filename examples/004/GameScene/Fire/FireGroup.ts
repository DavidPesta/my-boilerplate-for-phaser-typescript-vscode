class FireGroup extends Phaser.Group {
	gameScene:GameScene;
	
	constructor(gameScene:GameScene) {
		super(gameScene.game);
		this.gameScene = gameScene;
	}
	
	createFire(x:number, y:number):Fire {
		let fire:Fire = this.getFirstExists(false);
		if (!fire) {
			fire = new Fire(this.game);
			this.add(fire);
		}
		
		fire.setup(x, y);
		
		return fire;
	}
}
