class Boot extends Phaser.State {
	init() {
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;
	}
	
	preload() {}
	
	create() {
		this.game.state.start("Preloader", true, false);
	}
}
