class Arrow extends Phaser.Sprite {
	static loadAssets(game:Phaser.Game) {
		let assetPath = "game/GameScene/Arrow";
		game.load.image("arrowImage", assetPath + "/arrow.png");
	}
	
	//parentScene:Phaser.State;
	direction:string;
	
	constructor(direction:string, parentScene:Phaser.State, x:number, y:number, clickAction:Function) {
		super(parentScene.game, x, y, "arrowImage");
		this.game.add.existing(this);
		
		//this.parentScene = parentScene;
		this.direction = direction;
		
		if (this.direction == "left") {
			this.scale.x = -1;
		}
		
		this.anchor.setTo(0.5);
		
		this.inputEnabled = true;
		this.input.pixelPerfectClick = true;
		this.events.onInputDown.add(clickAction, parentScene);
	}
}
