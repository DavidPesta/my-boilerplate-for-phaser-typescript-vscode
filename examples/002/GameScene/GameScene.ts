class GameScene extends Phaser.State {
	static loadAssets(game:Phaser.Game) {
		let assetPath = "game/GameScene";
		game.load.image("backgroundImage", assetPath + "/background.png");
	}
	
	animalData:{kind:string, imageKey:string, frame:number, audioKey:string}[];
	backgroundImage:Phaser.Sprite;
	animals:Phaser.Group;
	currentAnimal:Animal;
	animalText:Phaser.Text;
	leftArrow:Arrow;
	rightArrow:Arrow;
	animalIsMoving:boolean;
	
	preload() {
		this.animalData = [
			{kind: "chicken", imageKey: "chickenSheet", frame: 0, audioKey: "chickenSound"},
			{kind: "horse", imageKey: "horseSheet", frame: 0, audioKey: "horseSound"},
			{kind: "pig", imageKey: "pigSheet", frame: 0, audioKey: "pigSound"},
			{kind: "sheep", imageKey: "sheepSheet", frame: 0, audioKey: "sheepSound"}
		];
	}
	
	create() {
		Game.fadeIn(this.game);
		
		this.backgroundImage = this.game.add.sprite(0, 0, "backgroundImage");
		this.backgroundImage.width = this.game.width;
		this.backgroundImage.height = this.game.height;
		
		let style = {font: "bold 30pt Arial", fill: "#D0171B", align: "center"}
		this.animalText = this.game.add.text(this.game.width/2, this.game.height * 0.85, "", style);
		this.animalText.anchor.setTo(0.5);
		
		this.animals = this.game.add.group();
		for (let i in this.animalData) {
			let animal = new Animal(this.game, -1000, this.game.world.centerY, this.animalData[i]);
			this.animals.add(animal);
		}
		
		this.currentAnimal = this.animals.next();
		this.currentAnimal.position.set(this.game.world.centerX, this.game.world.centerY);
		this.showAnimalText(this.currentAnimal);
		
		this.leftArrow = new Arrow("left", this, 370, this.game.world.centerY, this.switchAnimal);
		this.rightArrow = new Arrow("right", this, 890, this.game.world.centerY, this.switchAnimal);
		
		this.animalIsMoving = false;
	}
	
	showAnimalText(animal:Animal) {
		this.animalText.setText(animal.text);
		this.animalText.visible = true;
	}
	
	switchAnimal(arrow:Arrow, event:Event) {
		if (this.animalIsMoving) {
			return false;
		}
		
		this.animalIsMoving = true;
		
		this.animalText.visible = false;
		
		let newAnimal:Animal;
		let currentAnimalMoveToX:number;
		
		if ("left" == arrow.direction) {
			newAnimal = this.animals.next();
			newAnimal.x = -newAnimal.width/2;
			currentAnimalMoveToX = this.game.width + this.currentAnimal.width/2;
		}
		else {
			newAnimal = this.animals.previous();
			newAnimal.x = this.game.width + newAnimal.width/2;
			currentAnimalMoveToX = -this.currentAnimal.width/2;
		}
		
		let newAnimalMovement:Phaser.Tween = this.game.add.tween(newAnimal);
		newAnimalMovement.to({x: this.game.world.centerX}, 1000);
		newAnimalMovement.onComplete.add(() => {
			this.animalIsMoving = false;
			this.showAnimalText(newAnimal);
		});
		newAnimalMovement.start();
		
		var currentAnimalMovement:Phaser.Tween = this.game.add.tween(this.currentAnimal);
		currentAnimalMovement.to({x: currentAnimalMoveToX}, 1000);
		currentAnimalMovement.start();
		
		this.currentAnimal = newAnimal;
	}
}
