class Hero extends Phaser.Sprite {
	static loadAssets(game:Phaser.Game) {
		let assetPath = "game/GameScene/Hero";
		game.load.image("heroImage", assetPath + "/hero.png");
	}
	
	gameScene:GameScene;
	speedX:number;
	isMoving:boolean;
	
	constructor(gameScene:GameScene, x:number, y:number, speedX:number) {
		super(gameScene.game, x, y, "heroImage");
		
		this.gameScene = gameScene;
		this.speedX = speedX;
		this.isMoving = false;
		
		this.game.add.existing(this);
	}
	
	startMoving() {
		this.isMoving = true;
	}
	
	stopMoving() {
		this.isMoving = false;
	}
	
	update() {
		if (this.gameScene.gameLive) {
			if (this.isMoving) {
				this.x += this.speedX;
			}
		}
	}
}
