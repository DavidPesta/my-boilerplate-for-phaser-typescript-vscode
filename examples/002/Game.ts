class Game extends Phaser.Game {
	constructor() {
		super(1280, 720, Phaser.AUTO);
		
		this.state.add("Boot", Boot);
		this.state.add("Preloader", Preloader);
		this.state.add("GameScene", GameScene);
		
		this.state.start("Boot");
	}
	
	// The stage alpha is the only thing that I could find that prevents the flicker from happening before the fade-in starts
	static fadeIn(game:Phaser.Game, delay:number = 100, listener?:Function, listenerContext?:any) {
		game.stage.alpha = 0;
		let fadeIn:Phaser.Timer = game.time.create();
		fadeIn.add(delay, () => {
			game.camera.flash(0);
			game.stage.alpha = 1;
		}, this);
		if (undefined != listener) {
			game.camera.onFlashComplete.add(listener, listenerContext);
		}
		fadeIn.start();
	}
	
	static fadeOut(game:Phaser.Game, listener:Function, listenerContext:any) {
		game.camera.fade(0);
		game.camera.onFadeComplete.add(listener, listenerContext);
	}
}

window.onload = () => {
	var game = new Game();
}
