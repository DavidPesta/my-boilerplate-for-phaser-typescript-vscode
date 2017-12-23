class Item extends Phaser.Sprite {
	itemType:string;
	
	constructor(itemType:string, game:Phaser.Game, x:number, y:number) {
		super(game, x, y, itemType + "Image");
		this.game.add.existing(this);
		
		this.itemType = itemType;
		
		this.anchor.setTo(0.5);
	}
}
