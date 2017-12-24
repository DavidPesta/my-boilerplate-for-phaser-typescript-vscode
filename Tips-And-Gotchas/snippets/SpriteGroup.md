# Sprite Group Snippet

When you need a Sprite object that gets instantiated multiple times where the use of a memory-saving recycling pool is prudent, use these snippets to handle the Sprites in a Group.

FIRST, REMEMBER: Place this into the Preloader.ts:
```
SpriteName.loadAssets(this.game);
```

Create a SpriteName folder and name the files SpriteName.ts and SpriteNameGroup.ts where SpriteName is the name you wish to give the sprite.

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
	
	setup(x:number, y:number) {
		//this.loadTexture("spriteNameImage");
		//this.loadTexture("spriteNameSheet", #);
		
		// ATTENTION: loadTexture must come before anything else, especially enabling physics
	}
}
```

SpriteNameGroup.ts
```
class SpriteNameGroup extends Phaser.Group {
	gameScene:GameScene;
	
	constructor(gameScene:GameScene) {
		super(gameScene.game);
		this.gameScene = gameScene;
	}
	
	createSpriteName(x:number, y:number):SpriteName {
		let spriteName:SpriteName = this.getFirstExists(false);
		if (!spriteName) {
			spriteName = new SpriteName(this.game);
			this.add(spriteName);
		}
		
		spriteName.setup(x, y);
		
		return spriteName;
	}
}
```

FINALLY, after you do all this, you'll need to close and re-open Visual Studio Code for the IDE references to work.
