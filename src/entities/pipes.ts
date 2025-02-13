import Phaser from 'phaser'

// shits wack and fucked up, fix it

export default class Pipes extends Phaser.GameObjects.Group {
    topPipe: Phaser.GameObjects.Rectangle;
    bottomPipe: Phaser.GameObjects.Rectangle;
    velocity: number;
    gapSize: number;
    gapY: number;
    
    constructor(scene: Phaser.Scene, x: number) {
        super(scene);

        x *= 300; // Gap for pipes x position
        this.velocity = -150;
        this.gapSize = 200;
        this.gapY = Phaser.Math.Between(150, 450);

        this.topPipe = new Phaser.GameObjects.Rectangle(scene, 850 + x, this.gapY - this.gapSize / 2 - 300, 50, 300, 0x00ff00);
        scene.add.existing(this.topPipe);
        scene.physics.add.existing(this.topPipe);
        this.topPipe.setOrigin(0, 0);
        this.topPipe.body!.setVelocityX(this.velocity).setImmovable(true).allowGravity = false;

        this.bottomPipe = new Phaser.GameObjects.Rectangle(scene, 850 + x, this.gapY + this.gapSize / 2, 50, 300, 0x0000ff);
        scene.add.existing(this.bottomPipe);
        scene.physics.add.existing(this.bottomPipe);
        this.bottomPipe.setOrigin(0, 0);
        this.bottomPipe.body!.setVelocityX(this.velocity).setImmovable(true).allowGravity = false;
    }

    update() {
        // If the pipes move off-screen, reset their position
        if (this.topPipe.x < -50) {
            this.topPipe.x = 850;
            this.bottomPipe.x = 850;

            this.gapY = Phaser.Math.Between(150, 450);

            this.topPipe.y = this.gapY - this.gapSize / 2 - 300;
            this.bottomPipe.y = this.gapY + this.gapSize / 2;
        }
    }
}