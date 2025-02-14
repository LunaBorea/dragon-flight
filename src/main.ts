import './style.css'
import Phaser from 'phaser';
import GameScene from './scenes/game-scene';

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'body',
    scene: [GameScene],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { x: 0, y: 1200 },
            debug: false
        }
    },
    antialias: false
};

const game = new Phaser.Game(config); game;
