These files are meant to preserve many hard won learning experiences.

* [Inline interface definition for assigned JSON-like data that defines every element in that JSON-like data (link)](Inline-Definition-JSON-data.md)


* When adding a new class, you must close and re-open Visual Studio Code in order for that class to be recognized throughout your project


* this.game.add.existing(this); needs to be added to the end of Sprite constructors (and probably other display things) in order for them to appear in the game. This seems to be what game.add.sprite(...) does implicitly, so doing this in our constructor shouldn't break any Phaser framework pattern.


* For "this.events.onInputDown.add(listener, listenerContext)" inside of a member class where the function belongs to the container class, BE SURE to pass a reference to the container class to the "listenerContext" in addition to the reference to the container class's function to be called.
