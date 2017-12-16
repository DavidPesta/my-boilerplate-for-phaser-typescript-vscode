Usage Instructions

1. Press Ctrl-Shift-B
2. Press Ctrl-Shift-`
3. Type http-server
4. Leave both terminals running in the background (you can click the "x" to close the terminal panes)
5. Press F5 or click on the green arrow to start the debugger
6. YOU NEED TO OFTEN CLICK ON THE REFRESH BUTTON IN THE VS CODE DEBUGGING TOOLS TO MAKE THINGS WORK


Setup Instructions

This is what was done to set all of this up:

1. Environment pre-steps:<br>
\# sudo curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -<br>
\# sudo apt-get install -y nodejs<br>
\# sudo npm install -g typescript<br>
\# sudo npm install -g typings<br>
\# sudo npm install -g http-server

Inside VSCode:

2. Re-map keyboard shortcuts:<br>
File > Preferences > Keyboard Shortcuts<br>
Go Back --> Ctrl+LeftArrow<br>
Go Forward --> Ctrl+RightArrow

3. Press "Ctrl-," and paste this into the editor pane on the right:
```
{
	"window.zoomLevel": 0,
	"explorer.confirmDelete": false,
	"window.menuBarVisibility": "toggle",
	"workbench.activityBar.visible": true,
	"workbench.statusBar.visible": true,
	"workbench.editor.showTabs": false,
	"workbench.colorCustomizations": {
		// Gutter indicators (left)
		"editorGutter.modifiedBackground": "#0084ff",
		"editorGutter.addedBackground": "#00ff00",
		"editorGutter.deletedBackground": "#ff0000",
		// Scrollbar indicators (right)
		"editorOverviewRuler.modifiedForeground": "#0084ff",
		"editorOverviewRuler.addedForeground": "#00ff00",
		"editorOverviewRuler.deletedForeground": "#ff0000"
	},
	"editor.detectIndentation": false,
	"editor.insertSpaces": false,
	"editor.tabSize": 4,
	"editor.renderWhitespace": "all",
	"editor.trimAutoWhitespace": false,
	"editor.lightbulb.enabled": false
}
```
4. Press Ctrl-`
5. Type "tsc --init"
6. Inside tsconfig.json, make sure "target" is "es5"
7. Inside tsconfig.json, set "module" to "none"
8. Inside tsconfig.json, uncomment "sourceMap": true,
9. Inside tsconfig.json, uncomment and change "outFile": "./game.js",
10. Inside tsconfig.json, set "removeComments" to true
11. Inside tsconfig.json, add this as another node:
```
	"exclude": [
		"node_modules",
		"phaser",
		"game.js",
		"game.js.map",
		"tsd/phaser.d.ts",
		"tsd/pixi.d.ts"
	]
```
12. Press Ctrl-Shift-P
13. Choose "Tasks: Configure Default Build Task"
14. Choose "tsc: watch - tsconfig.json"
15. Press Ctrl-Shift-B to build and start the watch for .ts changes
16. Open a new terminal window with Ctrl-Shift-` and note the dropdown between different terminals
17. Run this in that terminal whenever you want to perform debugging: http-server
18. Let the http-server in that terminal keep running in the background
19. Click Extensions icon on the left
20. Search for "Debugger for Chrome" and make sure it is installed (and reload VS Code)
21. Click on the Debugger icon on the left
22. Click on the box at the top that says No Configuration and select Add Configuration
23. Choose Chrome and Chrome: Launch
24. Inside launch.json, make sure "url": "http://localhost:8080", is correct for http-server
25. Click on the green arrow or press F5 to start the Debugger
26. YOU NEED TO OFTEN CLICK ON THE REFRESH BUTTON IN THE VS CODE DEBUGGING TOOLS TO MAKE THINGS WORK


The following resources provided inspiration that helped me develop this boilerplate:
- https://github.com/djfdat/phaser-typescript-vscode-boilerplate
- Savjee
  - https://www.youtube.com/watch?v=EI73ycybieU
  - https://www.youtube.com/watch?v=H1lgYojMCaQ
- http://jasonwatmore.com/post/2016/06/22/nodejs-setup-simple-http-server-local-web-server
- Fix for a bug in Phaser v2.6.2 typescript definition
  - https://github.com/photonstorm/phaser-ce/issues/174
  - https://github.com/photonstorm/phaser-ce/commit/9e29186538ad48ed98fbfd72020bc0f2f0d3b9eb
- https://stackoverflow.com/questions/35963346/only-amd-and-system-modules-are-supported-alongside-out
