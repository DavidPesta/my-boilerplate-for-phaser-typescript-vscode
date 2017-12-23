class PlatformGroup extends Phaser.Group {
	gameScene:GameScene;
	
	constructor(gameScene:GameScene) {
		super(gameScene.game);
		this.gameScene = gameScene;
	}
	
	createPlatform(x:number, y:number):Platform {
		let platform:Platform = this.getFirstExists(false);
		if (!platform) {
			platform = new Platform(this.game);
			this.add(platform);
		}
		
		platform.setup(x, y);
		
		return platform;
	}
}
