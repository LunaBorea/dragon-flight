import Phaser from "phaser";
import Player from "../entities/player";
import Pipes from "../entities/pipes";

export default class GameScene extends Phaser.Scene {
    player!: Player;
    pipes: Pipes[] = [];

    constructor() {
        super('game-scene');
    };

    create() {
        this.player = new Player(this, 50, 300)

        // Create multiple pipe pairs, evenly spaced out
        for (let i = 0; i < 3; i++) {
            const pipe = new Pipes(this, i); // Pipe width: 50px, gap size: 200px
            this.pipes.push(pipe);
        }
    }

    update(time: number, delta: number): void {
        this.player.update()

        this.pipes.forEach(pipe => pipe.update());
    };

};