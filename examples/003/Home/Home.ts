class Home extends Phaser.State {
	background:Phaser.Sprite;
	message:string;
	messageText:Phaser.Text;
	
	init(message:string) {
		this.message = message;
	}
	
	create() {
		Game.fadeIn(this.game);
		
		this.background = this.game.add.sprite(0, 0, "backyardImage");
		this.background.width = this.game.width;
		this.background.height = this.game.height;
		this.background.inputEnabled = true;
		this.background.events.onInputDown.add(() => {
			Game.fadeOut(this.game, () => {
				this.game.state.start("GameScene");
			}, this);
		});
		
		var style = {font: '35px Arial', fill: '#f00', boundsAlignH: "center", boundsAlignV: "middle"};
		this.game.add.text(this.game.world.centerX - 150, this.game.world.centerY + 140, 'PRESS TO START', style);
		
		if (this.message) {
			this.messageText = this.game.add.text(0, 0, this.message, style);
			this.messageText.setTextBounds(0, 150, this.game.width, 100);
		}
	}
}
