Snippets

* [Sprite (link)](snippets/Sprite.md)

* [Sprite Group (link)](snippets/SpriteGroup.md)


These items are meant to preserve many hard won learning experiences.

* DO NOT CREATE GRAPHICS until the game code is mostly written and playable. Create rectangle placeholders for sprite images and such so that you can decide on image dimensions and so that momentum exists toward finishing. Prepare the image filenames as intended, but decide on the actual graphics later.


* [DO NOT enable physics on a Sprite before it has been given a texture (link)](Enable-Physics-AFTER-LoadTexture.md)


* [Inline interface definition for assigned JSON-like data that defines every element in that JSON-like data (link)](Inline-Definition-JSON-data.md)


* When adding a new class, you must close and re-open Visual Studio Code in order for that class to be recognized throughout your project


* this.game.add.existing(this); needs to be added after "super" is called in Sprite constructors (and probably other display things) in order for them to appear in the game. This seems to be what game.add.sprite(...) does implicitly, so doing this in our constructor shouldn't break any Phaser framework pattern.


* [Mobile buttons that need to be held need to have additional input event listeners attached for best results (link)](Mobile-Button-Press.md)


* For "this.events.onInputDown.add(listener, listenerContext)" inside of a member class where the function belongs to the container class, BE SURE to pass a reference to the container class to the "listenerContext" in addition to the reference to the container class's function to be called.


* for loops: Use "of" to traverse array elements. Use "in" to traverse object properties, but note that the temp variable is the key and not the value.


* When a Sprite belongs to a Group, its update method does not fire, probably to save resources. Rather, the update method on the group needs to be used. Use this.forEachExists, for example, inside of the group's update method.


* To examine variable values inside of the Chrome dev tools, this is where they can be found: window.Phaser.GAMES[0].world.children
