"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Game = (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super.call(this, 1280, 720, Phaser.AUTO) || this;
        _this.state.add('Boot', Boot);
        _this.state.add('Preloader', Preloader);
        _this.state.add('Scene', Scene);
        _this.state.start('Boot');
        return _this;
    }
    return Game;
}(Phaser.Game));
window.onload = function () {
    var game = new Game();
};
var Boot = (function (_super) {
    __extends(Boot, _super);
    function Boot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Boot.prototype.init = function () {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
    };
    Boot.prototype.preload = function () { };
    Boot.prototype.create = function () {
        this.game.state.start('Preloader', true, false);
    };
    return Boot;
}(Phaser.State));
var Preloader = (function (_super) {
    __extends(Preloader, _super);
    function Preloader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Preloader.prototype.preload = function () {
        this.game.load.image('image', 'game/Scene/image.png');
    };
    Preloader.prototype.create = function () {
        this.game.state.start('Scene');
    };
    return Preloader;
}(Phaser.State));
var Scene = (function (_super) {
    __extends(Scene, _super);
    function Scene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Scene.prototype.preload = function () { };
    Scene.prototype.create = function () {
        var image = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'image');
        image.anchor.setTo(0.5, 0.5);
    };
    return Scene;
}(Phaser.State));
//# sourceMappingURL=game.js.map