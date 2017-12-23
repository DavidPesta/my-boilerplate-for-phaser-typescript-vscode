class Hero extends Phaser.Sprite {
	static loadAssets(game:Phaser.Game) {
		let assetPath = "game/GameScene/Hero";
		game.load.spritesheet("heroSheet", assetPath + "/hero_spritesheet.png", 28, 30, 5, 1, 1);
	}
	
	gameScene:GameScene;
	runSpeed:number;
	jumpSpeed:number;
	isMovingDirection?:MovementDirection;
	mustJumpNow:boolean;
	
	constructor(gameScene:GameScene, x:number, y:number) {
		super(gameScene.game, x, y, "heroSheet", 3);
		this.game.add.existing(this);
		
		this.gameScene = gameScene;
		this.runSpeed = 180;
		this.jumpSpeed = 550;
		
		this.gameScene.game.physics.arcade.enable(this);
		this.body.collideWorldBounds = true;
		
		this.anchor.setTo(0.5);
		
		this.animations.add("walkAnimation", [0, 1, 2, 1], 6, true);
	}
	
	update() {
		if (this.gameScene.gameLive) {
			this.game.physics.arcade.collide(this, this.gameScene.ground);
			this.game.physics.arcade.collide(this, this.gameScene.platforms);
			
			this.game.physics.arcade.overlap(this, this.gameScene.fires, this.gameScene.gameLost, undefined, this.gameScene);
			this.game.physics.arcade.overlap(this, this.gameScene.barrels, this.gameScene.gameLost, undefined, this.gameScene);
			this.game.physics.arcade.overlap(this, this.gameScene.gorilla, this.gameScene.gameWon, undefined, this.gameScene);
			
			this.body.velocity.x = 0;
			
			if (this.gameScene.cursors.left.isDown || MovementDirection.Left == this.isMovingDirection) {
				this.body.velocity.x = -this.runSpeed;
				this.scale.setTo(1, 1);
				this.play("walkAnimation");
			}
			else if (this.gameScene.cursors.right.isDown || MovementDirection.Right == this.isMovingDirection) {
				this.body.velocity.x = this.runSpeed;
				this.scale.setTo(-1, 1);
				this.play("walkAnimation");
			}
			else {
				this.animations.stop();
				this.frame = 3;
			}
			
			if ((this.gameScene.cursors.up.isDown || this.mustJumpNow) && this.body.touching.down) {
				this.body.velocity.y = -this.jumpSpeed;
			}
		}
	}
}
