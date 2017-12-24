# Sprite Snippet

When you need to create a single Sprite object that does not need to be multiplied and handled inside of a group, use this snippet.

FIRST, REMEMBER: Place this into the Preloader.ts:
```
SpriteName.loadAssets(this.game);
```

Create a SpriteName folder and name the file SpriteName.ts where SpriteName is the name you wish to give the sprite.

Perform the following "find and replace" on the following code after you install it:
SpriteName --> (PascalCase name of sprite)
spriteName --> (camelCase name of sprite)

SpriteName.ts
```
class SpriteName extends Phaser.Sprite {
	static loadAssets(game:Phaser.Game) {
		let assetPath = "game/path/to/SpriteName";
		//game.load.image("spriteNameImage", assetPath + "/spriteName.png");
		//game.load.spritesheet("spriteNameSheet", assetPath + "/spriteName_spritesheet.png", #, #, #, #, #);
	}
	
	gameScene:GameScene;
	
	constructor(gameScene:GameScene, x:number, y:number) {
		//super(gameScene.game, x, y, "spriteNameImage");
		//super(gameScene.game, x, y, "spriteNameSheet", #);
		this.game.add.existing(this);
		
		this.gameScene = gameScene;
	}
}
```

FINALLY, after you do all this, you'll need to close and re-open Visual Studio Code for the IDE references to work.
