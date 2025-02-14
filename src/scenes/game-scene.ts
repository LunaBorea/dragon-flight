import Phaser from "phaser";
import Player from "../entities/player";
import Pipes from "../entities/pipes";

export default class GameScene extends Phaser.Scene {
    player!: Player;
    pipes: Pipes[] = [];
    gameStarted: boolean = false;

    constructor() {
        super('game-scene');
    };

    create() {
        this.gameStarted = false;
        this.pipes = [];

        this.player = new Player(this, 150, 275)

        this.input.keyboard!.on('keydown-UP', () => {
            if (!this.gameStarted) {
                this.gameStarted = true;
                this.spawnPipes();
            }
        });
    }

    spawnPipes() {
        for (let i = 0; i < 3; i++) {
            const pipe = new Pipes(this, i);
            this.pipes.push(pipe);
        }
    }

    update(time: number, delta: number): void { time; delta;
        let body = this.player.body as Phaser.Physics.Arcade.Body

        this.player.update()

        this.pipes.forEach(pipe => pipe.update());

        this.pipes.forEach(pipe => {
            if (this.physics.overlap(this.player, pipe.topPipe) || this.physics.overlap(this.player, pipe.bottomPipe)) {
                this.scene.restart();
            }
        });

        if (body.blocked.up || body.blocked.down) {
            this.scene.restart();
        }
    };

};