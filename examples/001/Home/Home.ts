class Home extends Phaser.State {
	backgroundImage:Phaser.Sprite;
	
	create() {
		Game.fadeIn(this.game);
		
		this.backgroundImage = this.game.add.sprite(0, 0, "floorBackgroundImage");
		this.backgroundImage.width = this.game.width;
		this.backgroundImage.height = this.game.height;
		this.backgroundImage.inputEnabled = true;
		this.backgroundImage.events.onInputDown.add(() => {
			Game.fadeOut(this.game, () => {
				this.game.state.start("GameScene");
			}, this);
		});
		
		var style = {font: '35px Arial', fill: '#fff'};
		this.game.add.text(this.game.world.centerX - 150, this.game.world.centerY - 20, 'PRESS TO START', style);
	}
}
