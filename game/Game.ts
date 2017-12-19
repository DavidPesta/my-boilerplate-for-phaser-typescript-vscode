class Game extends Phaser.Game {
	constructor() {
		super(1280, 720, Phaser.AUTO);
		
		this.state.add("Boot", Boot);
		this.state.add("Preloader", Preloader);
		this.state.add("Home", Home);
		this.state.add("GameScene", GameScene);
		
		this.state.start("Boot");
	}
}

window.onload = () => {
	var game = new Game();
}
