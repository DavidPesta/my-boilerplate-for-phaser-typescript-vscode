class DizzyButton extends Button {
	static loadAssets(game:Phaser.Game) {
		let assetPath = "game/GameScene/Button/DizzyButton";
		game.load.image("rotateImage", assetPath + "/rotate.png");
	}
	
	constructor(parentScene:Phaser.State, x:number, y:number, clickAction:Function) {
		super(parentScene, x, y, "rotateImage", clickAction);
	}
}
