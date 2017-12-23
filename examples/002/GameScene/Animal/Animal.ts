class Animal extends Phaser.Sprite {
	static loadAssets(game:Phaser.Game) {
		let assetPath = "game/GameScene/Animal";
		game.load.spritesheet("chickenSheet", assetPath + "/chicken_spritesheet.png", 131, 200, 3);
		game.load.spritesheet("horseSheet", assetPath + "/horse_spritesheet.png", 212, 200, 3);
		game.load.spritesheet("pigSheet", assetPath + "/pig_spritesheet.png", 297, 200, 3);
		game.load.spritesheet("sheepSheet", assetPath + "/sheep_spritesheet.png", 244, 200, 3);
		game.load.audio("chickenSound", [assetPath + "/chicken.ogg", assetPath + "/chicken.mp3"]);
		game.load.audio("horseSound", [assetPath + "/horse.ogg", assetPath + "/horse.mp3"]);
		game.load.audio("pigSound", [assetPath + "/pig.ogg", assetPath + "/pig.mp3"]);
		game.load.audio("sheepSound", [assetPath + "/sheep.ogg", assetPath + "/sheep.mp3"]);
	}
	
	kind:string;
	text:string;
	sound:Phaser.Sound;
	
	constructor(game:Phaser.Game, x:number, y:number, data:{kind:string, imageKey:string, frame:number, audioKey:string}) {
		super(game, x, y, data.imageKey, data.frame);
		this.game.add.existing(this);
		
		this.kind = data.kind;
		this.text = this.kind.toUpperCase();
		this.sound = this.game.add.audio(data.audioKey);
		
		this.anchor.setTo(0.5);
		this.animations.add("animate", [0, 1, 2, 1, 0, 1], 3, false);
		
		this.inputEnabled = true;
		this.input.pixelPerfectClick = true;
		this.events.onInputDown.add(this.animate, this);
	}
	
	animate() {
		this.play("animate");
		this.sound.play();
	}
}
