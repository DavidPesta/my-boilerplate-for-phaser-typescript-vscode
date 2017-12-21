class GameScene extends Phaser.State {
	static loadAssets(game:Phaser.Game) {
		let assetPath = "game/GameScene";
		game.load.image("treasureImage", assetPath + "/treasure.png");
	}
	
	enemyData:{x:number, y:number, speedY:number}[];
	backgroundImage:Phaser.Sprite;
	level:number;
	hero:Hero;
	enemies:Enemy[];
	treasure:Phaser.Sprite;
	gameLive:boolean;
	youWinText:Phaser.Text;
	gameOverText:Phaser.Text;
	
	preload() {
		this.enemyData = [
			{x: 100, y: 200, speedY: 2},
			{x: 200, y: 50, speedY: 2},
			{x: 330, y: 500, speedY: 3},
			{x: 450, y: 400, speedY: -3},
			{x: 550, y: 700, speedY: 4},
			{x: 650, y: 450, speedY: 2},
			{x: 750, y: 350, speedY: -4},
			{x: 850, y: 600, speedY: -3},
			{x: 950, y: 150, speedY: 3},
			{x: 1050, y: 550, speedY: -2},
			{x: 1150, y: 550, speedY: 3}
		];
	}
	
	create() {
		Game.fadeIn(this.game);
		
		this.backgroundImage = this.game.add.sprite(0, 0, "floorBackgroundImage");
		this.backgroundImage.width = this.game.width;
		this.backgroundImage.height = this.game.height;
		
		this.backgroundImage.inputEnabled = true;
		this.backgroundImage.events.onInputDown.add(this.startMoving, this);
		this.backgroundImage.events.onInputUp.add(this.stopMoving, this);
		
		this.level = 0;
		
		this.treasure = this.game.add.sprite(this.game.width - 60, (this.game.height / 2) - 20, "treasureImage");
		
		var style = {font: '50px Arial', fill: '#0D0'};
		this.youWinText = this.game.add.text(this.game.world.centerX - 150, this.game.world.centerY - 20, 'YOU WON!!!', style);
		
		var style = {font: '50px Arial', fill: '#D00'};
		this.gameOverText = this.game.add.text(this.game.world.centerX - 150, this.game.world.centerY - 20, 'GAME OVER!', style);
		
		this.resetGame();
	}
	
	startMoving() {
		this.hero.startMoving();
	}
	
	stopMoving() {
		this.hero.stopMoving();
	}
	
	resetGame() {
		this.level++;
		this.createHero();
		this.createEnemies();
		this.youWinText.visible = false;
		this.gameOverText.visible = false;
		this.gameLive = true;
	}
	
	createHero() {
		if (this.hero) {
			this.hero.destroy();
		}
		
		this.hero = new Hero(this, 10, (this.game.height / 2) - 20, 1.5 + this.level);
	}
	
	createEnemies() {
		if (this.enemies) {
			for (let enemy of this.enemies) {
				enemy.destroy();
			}
		}
		
		this.enemies = [];
		for (let i in this.enemyData) {
			let speedY:number = this.enemyData[i].speedY;
			if (speedY < 0) {
				speedY -= (this.level - 1);
			}
			else {
				speedY += (this.level + 1);
			}
			this.enemies.push(new Enemy(this, this.enemyData[i].x, this.enemyData[i].y, speedY));
		}
	}
	
	update() {
		if (this.gameLive) {
			let heroRectangle:Phaser.Rectangle = new Phaser.Rectangle(this.hero.x, this.hero.y, this.hero.width, this.hero.height);
			let treasureRectangle:Phaser.Rectangle = new Phaser.Rectangle(this.treasure.x, this.treasure.y, this.treasure.width, this.treasure.height);
			
			if (Phaser.Rectangle.intersects(heroRectangle, treasureRectangle)) {
				this.gameLive = false;
				this.youWinText.visible = true;
				
				let wait:Phaser.Timer = this.game.time.create();
				wait.add(1000, () => {
					this.resetGame();
				}, this);
				wait.start();
			}
			
			for (let enemy of this.enemies) {
				let enemyRectangle:Phaser.Rectangle = new Phaser.Rectangle(enemy.x, enemy.y, enemy.width, enemy.height);
				if (Phaser.Rectangle.intersects(heroRectangle, enemyRectangle)) {
					this.gameLive = false;
					this.gameOverText.visible = true;
					
					let wait:Phaser.Timer = this.game.time.create();
					wait.add(1000, () => {
						Game.fadeOut(this.game, () => {
							this.game.state.start("Home");
						}, this);
					}, this);
					wait.start();
				}
			}
		}
	}
}
