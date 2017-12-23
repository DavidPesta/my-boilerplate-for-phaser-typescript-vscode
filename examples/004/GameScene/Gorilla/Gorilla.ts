class Gorilla extends Phaser.Sprite {
	static loadAssets(game:Phaser.Game) {
		let assetPath = "game/GameScene/Gorilla";
		game.load.image("gorillaImage", assetPath + "/gorilla.png");
	}
	
	gameScene:GameScene; // This represents the physical world that contains every physical object
	barrelFrequency:number; // This could represent the gorilla's rate of fire speed
	barrelSpeed:number; // This could represent the gorilla's strength
	barrelTimer:Phaser.TimerEvent; // This reflects the gorilla's mind, ticking away until it decides to throw one
	
	constructor(gameScene:GameScene, x:number, y:number, barrelFrequency:number, barrelSpeed:number) {
		super(gameScene.game, x, y, "gorillaImage");
		this.game.add.existing(this);
		
		this.gameScene = gameScene;
		this.barrelFrequency = barrelFrequency;
		this.barrelSpeed = barrelSpeed;
		
		this.gameScene.game.physics.arcade.enable(this);
		this.body.allowGravity = false;
		this.body.immovable = true;
		
		this.barrelTimer = this.game.time.events.loop(Phaser.Timer.SECOND * this.barrelFrequency, this.createBarrel, this);
		
		this.createBarrel();
	}
	
	// This method should be here because it implements one of the gorilla's abilities
	createBarrel() {
		// This gorilla ability reaches into the game world where barrels exist to create one and throw it from where the gorilla is standing
		this.gameScene.barrels.createBarrel(this.x, this.y, this.barrelSpeed);
	}
}
