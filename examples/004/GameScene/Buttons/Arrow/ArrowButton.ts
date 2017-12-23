enum MovementDirection {
	Left,
	Right
}

class ArrowButton extends Phaser.Button {
	static loadAssets(game:Phaser.Game) {
		let assetPath = "game/GameScene/Buttons/Arrow";
		game.load.image("arrowButtonImage", assetPath + "/arrowButton.png");
	}
	
	gameScene:GameScene;
	direction:MovementDirection;
	
	constructor(arrowDirection:MovementDirection, gameScene:GameScene, x:number, y:number) {
		super(gameScene.game, x, y, "arrowButtonImage");
		this.game.add.existing(this);
		
		this.gameScene = gameScene;
		this.direction = arrowDirection;
		
		if (MovementDirection.Left == this.direction) {
			this.scale.x = -1;
		}
		
		this.alpha = 0.5;
		this.anchor.setTo(0.5);
		this.fixedToCamera = true;
		
		this.inputEnabled = true;
		this.input.pixelPerfectClick = true;
		this.events.onInputDown.add(this.pressAction, this);
		this.events.onInputOver.add(this.pressAction, this);
		this.events.onInputUp.add(this.releaseAction, this);
		this.events.onInputOut.add(this.releaseAction, this);
	}
	
	pressAction() {
		this.gameScene.hero.isMovingDirection = this.direction;
	}
	
	releaseAction() {
		this.gameScene.hero.isMovingDirection = undefined;
	}
}
