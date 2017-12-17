class Scene extends Phaser.State {
	preload() {}
	
	create() {
		let image = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, "image");
		image.anchor.setTo(0.5, 0.5);
	}
}
