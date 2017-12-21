class GameScene extends Phaser.State {
	static loadAssets(game:Phaser.Game) {
		let assetPath = "game/GameScene";
		game.load.image("appleImage", assetPath + "/apple.png");
		game.load.image("candyImage", assetPath + "/candy.png");
		game.load.image("toyImage", assetPath + "/rubber_duck.png");
	}
	
	background:Phaser.Sprite;
	buttonSelected?:Button;
	uiBlocked:boolean;
	appleButton:ItemButton;
	candyButton:ItemButton;
	toyButton:ItemButton;
	dizzyButton: DizzyButton;
	//buttonCollection:Button[];
	healthText:Phaser.Text;
	funText:Phaser.Text;
	pet:Pet;
	
	create() {
		Game.fadeIn(this.game);
		
		this.buttonSelected = undefined;
		this.uiBlocked = false;
		
		this.background = this.game.add.sprite(0, 0, "backyardImage");
		this.background.inputEnabled = true;
		this.background.events.onInputDown.add(this.placeItem, this);
		
		this.appleButton = new ItemButton("apple", this, 72, 570, this.selectButton);
		this.candyButton = new ItemButton("candy", this, 144, 570, this.selectButton);
		this.toyButton = new ItemButton("toy", this, 216, 570, this.selectButton);
		this.dizzyButton = new DizzyButton(this, 288, 570, this.rotatePet);
		//this.buttonCollection = [this.appleButton, this.candyButton, this.toyButton, this.dizzyButton];
		
		this.pet = new Pet(this, 100, 400);
		
		var style = { font: '20px Arial', fill: '#fff'};
		this.healthText = this.game.add.text(10, 20, "", style);
		this.funText = this.game.add.text(140, 20, "", style);
		this.refreshStatusText();
	}
	
	update() {
		this.pet.checkAndReactToStats();
	}
	
	gameOver() {
		this.game.time.events.add(1000, () => {
			Game.fadeOut(this.game, () => {
				this.game.state.start("Home", true, false, "GAME OVER!");
			}, this);
		}, this);
	}
	
	refreshStatusText() {
		this.healthText.text = "Health: " + this.pet.health;
		this.funText.text = "Fun: " + this.pet.fun;
	}
	
	selectButton(button:Button, event:Phaser.Pointer) {
		if (!this.uiBlocked) {
			this.unselectButton();
			button.select();
			this.buttonSelected = button;
		}
	}
	
	unselectButton() {
		if (this.buttonSelected != undefined) {
			this.buttonSelected.unselect();
			this.buttonSelected = undefined;
		}
	}
	
	rotatePet(button:Button, event:Phaser.Pointer) {
		if (!this.uiBlocked) {
			this.selectButton(button, event);
			this.pet.rotate();
		}
	}
	
	placeItem(background:Phaser.Sprite, event:Phaser.Pointer) {
		if (this.buttonSelected && this.buttonSelected instanceof ItemButton && !this.uiBlocked) {
			let x = event.position.x;
			let y = event.position.y;
			
			let newItem:Item = new Item((this.buttonSelected as ItemButton).itemType, this.game, x, y);
			this.pet.gotoAndConsumeItem(newItem);
		}
	}
}
