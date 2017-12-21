class ItemButton extends Button {
	itemType:string;
	
	constructor(itemType:string, parentScene:Phaser.State, x:number, y:number, clickAction:Function) {
		super(parentScene, x, y, itemType + "Image", clickAction);
		
		this.itemType = itemType;
	}
}
