class ActionButton extends Phaser.Button {
	static loadAssets(game:Phaser.Game) {
		let assetPath = "game/GameScene/Buttons/Action";
		game.load.image("actionButtonImage", assetPath + "/actionButton.png");
	}
	
	gameScene:GameScene;
	
	constructor(gameScene:GameScene, x:number, y:number) {
		super(gameScene.game, x, y, "actionButtonImage");
		this.game.add.existing(this);
		
		this.gameScene = gameScene;
		
		this.alpha = 0.5;
		this.anchor.setTo(0.5);
		this.fixedToCamera = true;
		
		this.inputEnabled = true;
		this.input.pixelPerfectClick = true;
		this.events.onInputDown.add(this.pressAction, this);
		this.events.onInputUp.add(this.releaseAction, this);
	}
	
	pressAction() {
		this.gameScene.hero.mustJumpNow = true;
	}
	
	releaseAction() {
		this.gameScene.hero.mustJumpNow = false;
	}
}
