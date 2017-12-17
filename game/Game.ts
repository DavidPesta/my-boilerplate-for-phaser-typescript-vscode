class Game extends Phaser.Game
{
	constructor()
	{
		super(1280, 720, Phaser.AUTO);
		
		this.state.add("Boot", Boot);
		this.state.add("Preloader", Preloader);
		this.state.add("Scene", Scene);
		
		this.state.start("Boot");
	}
}

window.onload = () => {
	var game = new Game();
}
