enum TextColor {White, Green, Red}
enum TextSize {Medium, Large}

class HUDText extends Phaser.Text {
	constructor(game:Phaser.Game, text:string, textSize:TextSize, textColor:TextColor) {
		let style = {} as {font:string, fill:string};
		
		switch (textSize) {
			case TextSize.Medium:
				style.font = "35px Arial";
				break;
			case TextSize.Large:
				style.font = "50px Arial";
				break;
			default:
				style.font = "35px Arial";
		}
		
		switch (textColor) {
			case TextColor.White:
				style.fill = "#FFF";
				break;
			case TextColor.Green:
				style.fill = "#0D0";
				break;
			case TextColor.Red:
				style.fill = "#D00";
				break;
			default:
				style.fill = "#FFF";
		}
		
		let x:number = game.camera.width / 2;
		let y:number = game.camera.height / 2;
		
		super(game, x, y, text, style);
		this.game.add.existing(this);
		
		this.anchor.setTo(0.5);
		this.fixedToCamera = true;
	}
}
