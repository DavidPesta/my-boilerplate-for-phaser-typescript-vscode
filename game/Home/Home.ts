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
		
		var style = {font: '35px Arial', fill: '#fff'};
		this.game.add.text(this.game.world.centerX - 150, this.game.world.centerY - 20, 'PRESS TO START', style);
	}
}
