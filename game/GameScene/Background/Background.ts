class Background extends Phaser.Sprite {
	static loadAssets(game:Phaser.Game) {
		let assetPath = "game/GameScene/Background";
		game.load.image("backgroundImage", assetPath + "/background.png");
	}
	
	gameScene:GameScene;
	rotating:boolean;
	
	constructor(gameScene:GameScene, x:number, y:number) {
		super(gameScene.game, x, y, "backgroundImage");
		this.game.add.existing(this);
		
		this.gameScene = gameScene;
		this.rotating = false;
		
		this.width = this.gameScene.game.width;
		this.height = this.gameScene.game.height;
		this.anchor.setTo(0.5);
		
		this.inputEnabled = true;
	}
	
	rotate() {
		if (false == this.rotating) {
			let rotation:Phaser.Tween = this.game.add.tween(this);
			rotation.to({angle: "+360"}, 500);
			rotation.onComplete.add(() => {
				this.rotating = false;
			}, this);
			rotation.start();
			
			this.rotating = true;
		}
	}
}
