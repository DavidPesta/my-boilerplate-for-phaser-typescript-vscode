class Pet extends Phaser.Sprite {
	static loadAssets(game:Phaser.Game) {
		let assetPath = "game/GameScene/Pet";
		game.load.spritesheet("petSheet", assetPath + "/pet.png", 97, 83, 5, 1, 1);
	}
	
	parentScene:GameScene;
	health:number = 100;
	fun:number = 100;
	statsDecreaser:Phaser.TimerEvent;
	
	constructor(parentScene:GameScene, x:number, y:number) {
		super(parentScene.game, x, y, "petSheet");
		this.game.add.existing(this);
		
		this.parentScene = parentScene;
		this.statsDecreaser = this.game.time.events.loop(Phaser.Timer.SECOND * 5, this.passivelyReduceStats, this);
		
		this.animations.add('chompAnimation', [1, 2, 3, 2, 1], 7, false);
		
		this.inputEnabled = true;
		this.input.enableDrag();
		
		this.anchor.setTo(0.5);
	}
	
	checkAndReactToStats() {
		if (this.health <= 0 || this.fun <= 0) {
			this.frame = 4;
			this.parentScene.uiBlocked = true;
			this.parentScene.gameOver();
		}
	}
	
	passivelyReduceStats() {
		this.health -= 10;
		this.fun -= 15;
		this.parentScene.refreshStatusText();
	}
	
	gotoAndConsumeItem(item:Item) {
		this.parentScene.uiBlocked = true;
		
		let movementTween:Phaser.Tween = this.game.add.tween(this);
		movementTween.to({x: item.x, y: item.y}, 700);
		movementTween.onComplete.add(this.consumeItem, this, 0, item);
		movementTween.start();
	}
	
	// This is the right place for changing stats because a different kind of pet could react to items in different ways
	consumeItem(pet:Pet, event:any, item:Item) {
		this.animations.play("chompAnimation");
		
		if ("apple" == item.itemType) {
			this.health += 20;
		}
		
		if ("candy" == item.itemType) {
			this.health -= 10;
			this.fun += 10;
		}
		
		if ("toy" == item.itemType) {
			this.fun += 20;
		}
		
		item.destroy();
		
		this.parentScene.refreshStatusText();
		this.parentScene.uiBlocked = false;
	}
	
	rotate() {
		this.parentScene.uiBlocked = true;
		
		let rotationTween:Phaser.Tween = this.game.add.tween(this);
		rotationTween.to({angle: "+720"}, 1000);
		rotationTween.onComplete.add(() => {
			this.fun += 10;
			this.parentScene.refreshStatusText();
			this.parentScene.unselectButton();
			this.parentScene.uiBlocked = false;
		}, this);
		rotationTween.start();
	}
}
