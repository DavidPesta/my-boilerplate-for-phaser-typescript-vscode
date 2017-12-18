class Home extends Phaser.State {
	background:Phaser.Sprite;
	
	init() {}
	
	create() {
		this.background = this.game.add.sprite(0, 0);
		this.background.width = 1280;
		this.background.height = 720;
		this.background.inputEnabled = true;
		this.background.events.onInputDown.add(() => {
			this.game.state.start("GameScene");
		});
		
		var style = {font: '35px Arial', fill: '#fff'};
		this.game.add.text(this.game.world.centerX - 150, this.game.world.centerY - 20, 'PRESS TO START', style);
	}
}
