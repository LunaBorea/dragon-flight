import './style.css'
import Phaser from 'phaser';

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: window.innerWidth - 50,
    height: window.innerHeight - 50,
    scene: [],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { x: 0, y: 800 },
            debug: false
        }
    },
    parent: 'body',
    antialias: false
};

const game = new Phaser.Game(config);
game;

// "Roguelite" game, infinite sidescroller. You play as a dragon eating and killing enemies while flying. Free movement in X and Y direction.
// 5 stages, each stage takes 10? 20? minutes to get through. Each has enemies, obstacles and a boss at the end. Difficulty increases.
// When you die or complete a stage, you're brought to a shop where you can buy upgrades with currency gained while playing.
// Story:  You were born as your family leaves the nest, you fly after them. You defeat obstacles on the way to them. Ending is you reunited.
// Limited lives, 5? Each lost life makes you older?