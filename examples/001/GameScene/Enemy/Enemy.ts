class Enemy extends Phaser.Sprite {
	static loadAssets(game:Phaser.Game) {
		let assetPath = "game/GameScene/Enemy";
		game.load.image("enemyImage", assetPath + "/enemy.png");
	}
	
	gameScene:GameScene;
	speedY:number;
	
	constructor(gameScene:GameScene, x:number, y:number, speedY:number) {
		super(gameScene.game, x, y, "enemyImage");
		this.game.add.existing(this);
		
		this.gameScene = gameScene;
		this.speedY = speedY;
	}
	
	update() {
		if (this.gameScene.gameLive) {
			this.y += this.speedY;
			
			if (this.y <= 10) {
				this.y = 10;
				this.speedY = -this.speedY;
			}
			
			if (this.y >= this.game.height - 50) {
				this.y = this.game.height - 50;
				this.speedY = -this.speedY;
			}
		}
	}
}
