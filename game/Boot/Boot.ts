class Boot extends Phaser.State {
	preload() {}
	
	create() {
		// Boot settings can be added here

		this.game.state.start('Preloader', true, false);
	}
}
