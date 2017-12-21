class Button extends Phaser.Sprite {
	selected:boolean = false;
	
	constructor(parentScene:Phaser.State, x:number, y:number, imageKey:string, clickAction:Function) {
		super(parentScene.game, x, y, imageKey);
		
		this.inputEnabled = true;
		this.events.onInputDown.add(clickAction, parentScene);
		
		this.anchor.setTo(0.5);
		this.game.add.existing(this);
	}
	
	select() {
		if (!this.selected) {
			this.alpha = 0.4;
			this.selected = true;
		}
	}
	
	unselect() {
		if (this.selected) {
			this.alpha = 1;
			this.selected = false;
		}
	}
}
