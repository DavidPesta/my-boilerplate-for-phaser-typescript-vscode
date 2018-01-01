class GameScene extends Phaser.State {
	static loadAssets(game:Phaser.Game) {
		let assetPath = "game/GameScene";
	}
	
	gameLive:boolean;
	background:Background;
	
	create() {
		this.gameLive = true;
		
		Game.fadeIn(this.game, 100, () => {
			this.background.rotate();
		}, this);
		
		this.background = new Background(this, this.game.width / 2, this.game.height / 2);
		this.background.events.onInputDown.add(this.background.rotate, this.background); // Could be in the Background constructor, but more flexible outside
	}
}
