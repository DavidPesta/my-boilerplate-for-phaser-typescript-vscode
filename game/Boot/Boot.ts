class Boot extends Phaser.State {
	init() {
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;
	}
	
	preload() {
		Preloader.loadAssets(this.game);
	}
	
	create() {
		this.game.stage.backgroundColor = "#000";
		
		this.game.state.start("Preloader", true, false);
	}
}
