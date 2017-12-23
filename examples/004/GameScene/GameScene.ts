class GameScene extends Phaser.State {
	static loadAssets(game:Phaser.Game) {
		let assetPath = "game/GameScene";
		game.load.text("levelJson", assetPath + "/level.json");
		game.load.image("groundImage", assetPath + "/ground.png");
	}
	
	levelData:{
		heroStart:{x:number, y:number},
		platformData:{x:number, y:number}[],
		fireData:{x:number, y:number}[],
		gorilla:{x:number, y:number},
		barrelFrequency:number,
		barrelSpeed:number
	};
	
	gameLive:boolean;
	cursors:Phaser.CursorKeys;
	
	// The following things exist in the physical world, so they belong in this class representing the world scene
	ground:Phaser.Sprite;
	platforms:PlatformGroup;
	fires:FireGroup;
	barrels:BarrelGroup;
	hero:Hero;
	gorilla:Gorilla;
	leftButton:ArrowButton;
	rightButton:ArrowButton;
	actionButton:ActionButton;
	
	init() {
		this.levelData = JSON.parse(this.game.cache.getText("levelJson"));
		
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.game.physics.arcade.gravity.y = 1000;
		
		this.cursors = this.game.input.keyboard.createCursorKeys();
		
		this.game.world.setBounds(0, 0, 360, 880);
	}
	
	create() {
		Game.fadeIn(this.game);
		
		this.ground = this.game.add.sprite(0, 810, "groundImage");
		this.game.physics.arcade.enable(this.ground);
		this.ground.body.allowGravity = false;
		this.ground.body.immovable = true;
		
		this.platforms = new PlatformGroup(this);
		for (let platformDatum of this.levelData.platformData) {
			this.platforms.createPlatform(platformDatum.x, platformDatum.y);
		}
		
		this.fires = new FireGroup(this);
		for (let fireDatum of this.levelData.fireData) {
			this.fires.createFire(fireDatum.x, fireDatum.y);
		}
		
		this.barrels = new BarrelGroup(this);
		
		this.hero = new Hero(this, this.levelData.heroStart.x, this.levelData.heroStart.y);
		this.game.camera.follow(this.hero);
		
		this.gorilla = new Gorilla(this, this.levelData.gorilla.x, this.levelData.gorilla.y, this.levelData.barrelFrequency, this.levelData.barrelSpeed);
		
		this.leftButton = new ArrowButton(MovementDirection.Left, this, 54, 670);
		this.rightButton = new ArrowButton(MovementDirection.Right, this, 144, 670);
		this.actionButton = new ActionButton(this, 308, 670);
		
		this.gameLive = true;
	}
	
	gameWon() {
		this.gameLive = false;
		let youWinText = new HUDText(this.game, "YOU WON!!!", TextSize.Large, TextColor.Green);
		this.game.physics.arcade.isPaused = true;
		
		let wait:Phaser.Timer = this.game.time.create();
		wait.add(1000, () => {
			Game.fadeOut(this.game, () => {
				this.game.state.start("Home");
			}, this);
		}, this);
		wait.start();
	}
	
	gameLost() {
		this.gameLive = false;
		let gameOverText = new HUDText(this.game, "GAME OVER!", TextSize.Large, TextColor.Red);
		this.game.physics.arcade.isPaused = true;
		
		let wait:Phaser.Timer = this.game.time.create();
		wait.add(1000, () => {
			Game.fadeOut(this.game, () => {
				this.game.state.start("Home");
			}, this);
		}, this);
		wait.start();
	}
}
