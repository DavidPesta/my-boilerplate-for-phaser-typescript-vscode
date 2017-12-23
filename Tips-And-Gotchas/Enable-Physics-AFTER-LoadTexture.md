## Enable Physics AFTER LoadTexture

When you enable arcade physics on a Sprite child object, MAKE SURE the instance has a texture loaded FIRST!

* BAD:
```
      this.game.physics.arcade.enable(this);
      this.loadTexture("someImage");
```

* GOOD:
```
      this.loadTexture("someImage");
      this.game.physics.arcade.enable(this);
```

If you do not do GOOD, then physics will not be applied properly and the engine will behave strangely with that sprite.
