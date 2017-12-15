Setup Instructions

0. Pre-steps:<br>
\# sudo curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -<br>
\# sudo apt-get install -y nodejs<br>
\# sudo npm install -g typescript<br>
\# sudo npm install -g typings

1. Press Ctrl-`
2. Type "tsc --init"
3. Inside tsconfig.json, set "module" to "none"
4. Inside tsconfig.json, uncomment "sourceMap": true,
5. Inside tsconfig.json, uncomment and change "outFile": "./game.js",
6. Press Ctrl-Shift-P
7. Choose "Tasks: Configure Default Build Task"
8. Choose "tsc: watch - tsconfig.json"
9. Press Ctrl-Shift-B to build and start the watch for .ts changes
10. Open a new terminal window with Ctrl-Shift-` and note the dropdown between different terminals
11. Run this in that terminal: sudo npm install -g http-server
12. Run this in that terminal whenever you want to perform debugging: http-server
13. Let the http-server in that terminal keep running in the background
14. Click Extensions icon on the left
15. Search for "Debugger for Chrome" and make sure it is installed (and reload VS Code)
16. Click on the Debugger icon on the left
17. Click on the box at the top that says No Configuration and select Add Configuration
18. Choose Chrome and Chrome: Launch
19. Inside launch.json, make sure "url": "http://localhost:8080", is correct for http-server
20. Click on the green arrow or press F5 to start the Debugger
21. YOU NEED TO OFTEN CLICK ON THE REFRESH BUTTON IN THE VS CODE DEBUGGING TOOLS TO MAKE THINGS WORK

Press "Ctrl-," and paste this into the editor pane on the right:
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
	"editor.trimAutoWhitespace": false
}
```

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
