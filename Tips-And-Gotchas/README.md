CRITICAL: INTENTIONALLY READ AND CONTEMPLATE EVERY ITEM ON THIS PAGE BEFORE EVERY PROJECT


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


* for loops: Use "of" to traverse array elements, where the temp variable is the value. Use "in" to traverse object properties, but note that the temp variable is the key and not the value.


* Strange, but seems to be the best and most effective way to select a random property from an object:
```
let keys:string[] = Object.keys(obj);
let randomProperty:PropertyType = obj[keys[keys.length * Math.random() << 0]];
```

* When an event is fired, its listener function will be passed two arguments. The first argument is the source object from which the event originated. The second argument is the phaser event object for that event. When "this" is used within the listener function, that is the listenerContext that is passed when setting up the event.


* The best practice for input events attached to sprite objects is as follows. When a sprite object needs to have input interactions act upon it, be sure to have "this.inputEnabled = true;" added to its constructor. Now, when interacting with this sprite, the method of some different target object may be the subject of the interaction response. In that case, wherever in the code base that the target object exists when this interactivity should be attached, that is where "sourceObject.events.onInputDown.add(targetObject.method, targetObject);" should be placed. The target object may not exist yet when this source sprite object is created, and in that case, the event handler cannot be created inside of this source sprite object's constructor. On the other hand, if the target object is this same sprite object, then the event handler could well be placed inside of this sprite's constructor. But to keep things flexible, it might be good to keep it outside of the constructor, just in case the source needs to change. (But leave that to the developer's discretion; it's easy enough to move elsewhere.)


* When a Sprite belongs to a Group, its update method does not fire, probably to save resources. Rather, the update method on the group needs to be used. Use this.forEachExists, for example, inside of the group's update method. Inside of that loop within the group's update(), the individual sprite's update() methods can be called, thereby making update() within the sprite work all the same.


* There are times when you want a sprite to be involved with functionality that utilizes the exact screen location of that sprite--not just its world position. When that is needed, you'll need to maintain a translation between its world location and its screen position, and/or perhaps vice versa. In that case, you will need to write the methods that perform these translations and you will want these methods to be in that sprite's class. You will most certainly need to take into account the world coordinates of the sprite, the sprite's anchor point, and also the coordinates of the camera. But also, if you are wanting to correlate an exact pixel position on the sprite itself to the screen position, you may also need to take the sprite's scaling involved. The bottom line is, you need to focus on creating a method that performs explicit translation of a pixel position on the sprite to the pixel position on the screen view.


* To examine variable values inside of the Chrome dev tools, this is where they can be found: window.Phaser.GAMES[0].world.children
