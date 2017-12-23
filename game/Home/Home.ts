class Home extends Phaser.State {
	background:Phaser.Sprite;
	
	create() {
		Game.fadeIn(this.game);
		
		this.background = this.game.add.sprite(0, 0);
		this.background.width = this.game.width;
		this.background.height = this.game.height;
		this.background.inputEnabled = true;
		this.background.events.onInputDown.add(() => {
			Game.fadeOut(this.game, () => {
				this.game.state.start("GameScene");
			}, this);
		});
		
		let gameStartText = new HUDText(this.game, "PRESS TO START", TextSize.Medium, TextColor.White);
	}
}
