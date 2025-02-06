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