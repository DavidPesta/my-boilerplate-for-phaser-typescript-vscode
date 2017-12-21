class Boot extends Phaser.State {
	init() {
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;
	}
	
	create() {
		this.game.stage.backgroundColor = "#000";
		
		this.game.state.start("Preloader", true, false);
	}
}
