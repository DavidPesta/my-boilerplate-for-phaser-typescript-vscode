## Mobile Button Press

For the best mobile compatibility, a button press THAT NEEDS TO BE HELD needs more than just onInputDown and onInputUp. It also needs onInputOver and onInputOut.

The following is what you want to have happen:
```
    this.events.onInputDown.add(this.pressAction, this);
    this.events.onInputOver.add(this.pressAction, this);
    this.events.onInputUp.add(this.releaseAction, this);
    this.events.onInputOut.add(this.releaseAction, this);
```

Here are example methods that go with it:
```
pressAction() {
    this.gameScene.hero.isMovingDirection = this.direction;
}

releaseAction() {
    this.gameScene.hero.isMovingDirection = undefined;
}
```

Without doing all of these actions, the game will suffer intermittant glitchy responses.
