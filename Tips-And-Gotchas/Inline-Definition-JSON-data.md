## Inline Interface Definition for JSON-like Data

If you want to load raw data into typed structures without the overhead of interfaces, this is how to do it.

----

Here is how to load JSON-like elements into an array:
```javascript
let objectArrayData:{propertyOne:string, propertyTwo:number, propertyThree:string}[] = [
	{propertyOne: "oneWithoutQuotes", propertyTwo: 2, propertyThree: "three"},
	{"propertyOne": "oneWithQuotes", "propertyTwo": 2, "propertyThree": "three"}
];
```

We can add an additional element like this:
```javascript
objectArrayData.push({propertyOne: "oneWasAddedLater", propertyTwo: 2, propertyThree: "three"});
```

Here is how we can test it:
```javascript
for (let obj of objectArrayData) {
	console.log(obj);
}
```

This shows how it works with a raw JSON input string:
```javascript
let objectArrayJson:{propertyOne:string, propertyTwo:number, propertyThree:string}[] = JSON.parse('[{"propertyOne": "firstOne", "propertyTwo": 2, "propertyThree": "firstThree"},{"propertyOne": "secondOne", "propertyTwo": 2, "propertyThree": "secondThree"}]');

for (let obj of objectArrayJson) {
	console.log(obj);
}
```

----

Here is how to load JSON-like elements into a JSON-style keyed dictionary:
```javascript
let objectKeyedData:{[keyName:string]: {propertyOne:string, propertyTwo:number, propertyThree:string}} = {
	"key1": {propertyOne: "oneWithoutQuotes", propertyTwo: 2, propertyThree: "three"},
	"keyTwo": {"propertyOne": "oneWithQuotes", "propertyTwo": 2, "propertyThree": "three"}
}

```

We can add an additional element like this:
```javascript
objectKeyedData["KEY3"] = {propertyOne: "ONE", propertyTwo: 2, propertyThree: "THREE"};
```

Here is how we can test it:
```javascript
for (let obj in objectKeyedData) {
	console.log(obj);
	console.log(objectKeyedData[obj]);
}
```

This shows how it works with a raw JSON input string:
```javascript
let objectKeyedJson:{[keyName:string]: {propertyOne:string, propertyTwo:number, propertyThree:string}} = JSON.parse('{"key1": {"propertyOne": "firstOne", "propertyTwo": 2, "propertyThree": "firstThree"},"keyTwo": {"propertyOne": "secondOne", "propertyTwo": 2, "propertyThree": "secondThree"}}');

for (let obj in objectKeyedJson) {
	console.log(obj);
	console.log(objectKeyedJson[obj]);
}
```

----

We can have a complicated nested structure many levels deep AND we can space out the definition with newlines:
```javascript
let objectKeyedData: {
	[keyName:string]: {
		propertyOne:string,
		propertyTwo: {
			arrProp1: number,
			arrProp2: {
				[innerKeyName:string]: {
					word: string
				}
			}
		}[],
		propertyThree:string
	}
} = {
	"key1": {
		propertyOne: "oneWithoutQuotes",
		propertyTwo: [{
			arrProp1: 5,
			arrProp2: {
				"firstWord": {
					word: "hello1"
				},
				"secondWord": {
					word: "hello2"
				}
			}
		}, {
			arrProp1: 7,
			arrProp2: {
				"firstWord": {
					word: "world1"
				},
				"secondWord": {
					word: "world2"
				}
			}
		}],
		propertyThree: "three"
	},
	"keyTwo": {
		"propertyOne": "oneWithQuotes",
		"propertyTwo": [{
			arrProp1: 9,
			arrProp2: {
				"firstWord": {
					word: "hi1"
				},
				"secondWord": {
					word: "hi2"
				}
			}
		}, {
			arrProp1: 12,
			arrProp2: {
				"firstWord": {
					word: "there1"
				},
				"secondWord": {
					word: "there2"
				}
			}
		}],
		"propertyThree": "three"
	}
}
```

----

>Tip: If the objective is to convert a raw JSON string into new object instances, you should have static fromJson factories in the class (for single and for multiple object sets) to create and return the objects from that raw JSON string.

>Another Tip: You can drop the inline interface completely and it will automatically be the "any" type, which can yeild even more simplicity and convenience if you don't feel like you need the type safety in a given situation.
